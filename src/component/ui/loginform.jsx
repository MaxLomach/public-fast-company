import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import CheckBoxField from '../common/form/checkBoxField'
// import * as yup from 'yup'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false })
  const [errors, setErrors] = useState({})

  const handlChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  // const validatorSchema = yup.object().shape({
  //   password: yup
  //     .string()
  //     .required('пароль обязателен для заполнения')
  //     .matches(
  //       /(?=.*[A-Z])/,
  //       'Пароль дожен содержать хотя бы одну заглавную букву'
  //     )
  //     .matches(/(?=.*[0-9])/, 'пароль должен содержать хотя бы одну цифру')
  //     .matches(
  //       /(?=.*[!@#$%^&*])/,
  //       'пароль должен содержать хотя бы один специальный символ: "!@#$%^&*"'
  //     )
  //     .matches(/?=.{8}/, 'Пароль должен содержать минимум 8 символов'),
  //   email: yup
  //     .string()
  //     .required('эл. почта обязательна для заполнения')
  //     .email('Email введен некоректно')
  // })

  const validatorConfig = {
    email: {
      isRequired: { messege: 'эл. почта обязательна для заполнения' },
      isEmail: { messege: 'Email введен некоректно' }
    },
    password: {
      isRequired: { messege: 'пароль обязателен для заполнения' },
      isCapitalSymbol: {
        messege: 'Пароль дожен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: { messege: 'пароль должен содержать хотя бы одну цифру' },
      min: { messege: 'Пароль должен содержать минимум 8 символов', value: 8 }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    // validatorSchema
    //   .validate(data)
    //   .then(() => setErrors({}))
    //   .catch((err) => setErrors({ [err.path]: err.messege }))

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Enter your email'
        name='email'
        value={data.email}
        onChange={handlChange}
        error={errors.email}
      />
      <TextField
        label='Enter your password'
        type='password'
        name='password'
        value={data.password}
        onChange={handlChange}
        error={errors.password}
      />

      <CheckBoxField name='stayOn' value={data.stayOn} onChange={handlChange}>
        Remain in the system
      </CheckBoxField>
      <button
        className={
          'btn  w-100 mx-auto' + (!isValid ? ' btn-danger' : ' btn-success')
        }
        disabled={!isValid}
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default LoginForm
