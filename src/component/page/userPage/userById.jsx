import React, { useState, useEffect } from 'react'
import API from '../../../API'
import QualitiesList from '../../ui/qualities/qualitiesList'
import avatar from '../../../image/avatar.png'
import { useHistory } from 'react-router-dom'

const UserById = ({ userById }) => {
  const history = useHistory()
  const [userId, setUserById] = useState()
  useEffect(() => {
    API.users.getById(userById).then((date) => setUserById(date))
  }, [])
  const handleClickToUser = () => {
    history.push('/user')
  }
  const handleClickToEdit = () => {
    history.push(`/user/${userId._id}/userEdit`)
  }

  return userId ? (
    <>
      <div className='card bg-success bg-opacity-50'>
        <img src={avatar} className='card-img-top img' alt='Avatar' />
        <div className='card-body'>
          <h5 className='card-title text-center'>{userId.name}</h5>
          <p className='card-text'>
            Встретился(раз):
            <span className='bold-style-for-card-text'>
              {userId.completedMeetings}
            </span>
          </p>
          <p className='card-text'>
            Профессия:
            <span className='bold-style-for-card-text'>
              {userId.profession.name}
            </span>
          </p>
          <p className='card-text'>
            Качества:
            <QualitiesList user={userId} />
          </p>
          <p className='card-text'>
            Оценка:
            <span className='bold-style-for-card-text'>{userId.rate}</span>
          </p>
          <div className='btn-group w-100'>
            <button
              type='button'
              className='btn btn-success btn-sm '
              onClick={handleClickToUser}
            >
              All Users
            </button>
            <button
              type='button'
              className='btn btn-warning btn-sm '
              onClick={handleClickToEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
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

export default UserById
