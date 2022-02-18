import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import API from '../../API'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from '../common/form/checkBoxField'

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    professions: '',
    sex: 'male',
    qualities: [],
    licence: false
  })
  const [qualities, setQualities] = useState({})
  const [errors, setErrors] = useState({})
  const [professions, setProfessions] = useState()

  useEffect(() => {
    API.professions.fetchAll().then((date) => setProfessions(date))
    API.qualities.fetchAll().then((date) => setQualities(date))
  }, [])

  const handlChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
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
    },
    professions: {
      isRequired: {
        messege: 'Обязательно выберете Вашу профессию'
      }
    },
    licence: {
      isRequired: {
        messege: 'Confirm the license agreement'
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)

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
        label='Create a password'
        type='password'
        name='password'
        value={data.password}
        onChange={handlChange}
        error={errors.password}
      />
      <SelectField
        label='Choose your proffesion:'
        onChange={handlChange}
        options={professions}
        defaultOption='Choose..'
        error={errors.professions}
        value={data.professions}
        name='professions'
      />
      <RadioField
        option={[
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'female' },
          { name: 'Other', value: 'other' }
        ]}
        value={data.sex}
        name='sex'
        onChange={handlChange}
        label='Choose your gender'
      />
      <MultiSelectField
        options={qualities}
        onChange={handlChange}
        name='qualities'
        label='Add your qualities'
        defaultValue={data.qualities}
      />
      <CheckBoxField
        name='licence'
        value={data.licence}
        onChange={handlChange}
        error={errors.licence}
      >
        <a>License agreement</a>
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

export default RegisterForm
