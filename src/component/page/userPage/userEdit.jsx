import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../API'
import MultiSelectField from '../../common/form/multiSelectField'
import TextField from '../../common/form/textField'
// import { validator } from '../../../utils/validator'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'

const UserEdit = () => {
  const { userById } = useParams()
  const [userId, setUserId] = useState()
  const [data, setData] = useState({
    // email: `${userId.email}`,
    // name: `${userId.name}`,
    // profession: `${userId.profession}`
    email: '',
    name: '',
    professions: '',
    sex: 'male',
    qualities: []
  })
  const [qualities, setQualities] = useState({})
  // const [errors, setErrors] = useState({})
  const [professions, setProfessions] = useState()

  // console.log(professions)
  // const prof = () => {
  //   Object.keys(professions).map((elem) => {
  //     console.log(professions)
  //     // eslint-disable-next-line no-unused-expressions
  //     userId.profession.name === elem ? elem : ''
  //     return elem
  //   })
  // }
  // console.log(prof())
  // console.log(userId.profession.name)

  useEffect(() => {
    API.professions.fetchAll().then((date) => setProfessions(date))
    API.qualities.fetchAll().then((date) => setQualities(date))
  }, [])

  useEffect(() => {
    API.users.getById(userById).then((date) => setUserId(date))
  }, [])

  // useEffect(() => {
  //   setData({
  //     email: `${userId.email}`,
  //     name: `${userId.name}`,
  //     profession: `${userId.profession}`
  //   })
  // }, [userId])

  const handlChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  // const validatorConfig = {
  //   email: {
  //     isRequired: { messege: 'эл. почта обязательна для заполнения' },
  //     isEmail: { messege: 'Email введен некоректно' }
  //   },
  //   professions: {
  //     isRequired: {
  //       messege: 'Обязательно выберете Вашу профессию'
  //     }
  //   },
  //   name: {
  //     isRequired: {
  //       messege: 'Обязательно введите Ваше имя'
  //     }
  //   }
  // qualities: {
  //   isRequired: {
  //     messege: 'Обязательно выберете Ваши качества'
  //   }
  // }
  // }
  // useEffect(() => {
  //   validate()
  // }, [data])

  // const validate = () => {
  //   const errors = validator(data, validatorConfig)

  //   setErrors(errors)
  //   return Object.keys(errors).length === 0
  // }

  // const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    // const isValid = validate()
    // if (!isValid) return
  }
  // console.log(userId && userId.profession)
  return userId ? (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Edit {userId.name}</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label='Name'
              name='name'
              // value={data.name}
              onChange={handlChange}
              defaultValue={userId.name}
            />
            <TextField
              label='Enter your email'
              name='email'
              defaultValue={userId.email}
              onChange={handlChange}
              // error={errors.email}
            />
            <SelectField
              label='Choose your proffesion:'
              onChange={handlChange}
              options={professions}
              defaultOption={userId.profession.name}
              // error={errors.professions}
              defaultValue={userId.profession.name}
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
              defaultValue={userId.qualities}
            />
            <button
              // className={
              //   'btn  w-100 mx-auto' +
              //   (!isValid ? ' btn-danger' : ' btn-success')
              // }
              className={'btn  w-100 mx-auto btn-success'}
              // disabled={!isValid}
              type='submit'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className='container-for-loader'>
        <div className='loader'>
          <div className='spinner-border text-info' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserEdit
