import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../API'
import MultiSelectField from '../../common/form/multiSelectField'

const UserEdit = () => {
  const { userById } = useParams()
  const [userId, setUserById] = useState()
  useEffect(() => {
    API.users.getById(userById).then((date) => setUserById(date))
  }, [])

  return userId ? (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Edit {userId.name}</h3>
          <MultiSelectField />
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
