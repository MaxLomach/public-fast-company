import React, { useState, useEffect } from 'react'
import API from '../../../API'
import QualitiesList from '../../ui/qualities/qualitiesList'
import { useParams, Link, Route, Switch } from 'react-router-dom'
import User from '../../../layout/user'
import avatar from '../../../image/avatar.png'
import UserEdit from './userEdit'

const UserById = () => {
  const { userById } = useParams()

  const [userId, setUserById] = useState()
  useEffect(() => {
    API.users.getById(userById).then((date) => setUserById(date))
  }, [])

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
            <Link type='button' className='btn btn-success btn-sm ' to='/user'>
              All Users
            </Link>
            <Link
              type='button'
              className='btn btn-warning btn-sm '
              to={`${userId._id}/userEdit`}
            >
              Edit
            </Link>
            <Link to={`/user/${userId._id}/edit`}>
              <button className='btn btn-warning btn-sm'>
                Все пользователи Изменить
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Switch>
        <Route path='/user' component={User} />
        <Route path='/:userById/userEdit' component={UserEdit} />
      </Switch> */}
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
