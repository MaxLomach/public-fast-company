import React, { useEffect, useState } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handlChange = ({ target }) => {
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
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label='email'
              name='email'
              value={data.email}
              onChange={handlChange}
              error={errors.email}
            />
            <TextField
              label='password'
              type='password'
              name='password'
              value={data.password}
              onChange={handlChange}
              error={errors.password}
            />
            <button
              className={
                'btn  w-100 mx-auto' +
                (!isValid ? ' btn-danger' : ' btn-success')
              }
              disabled={!isValid}
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm