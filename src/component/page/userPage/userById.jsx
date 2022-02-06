import React, { useState, useEffect } from 'react'
import API from '../../../API'
import QualitiesList from '../../ui/qualities/qualitiesList'
import { useParams, Link, Route, Switch } from 'react-router-dom'
import User from '../../../layout/user'
import avatar from '../../../image/avatar.png'

const UserById = () => {
  const params = useParams()
  const { userById } = params

  const [userId, setUserById] = useState()
  useEffect(() => {
    API.users.getById(userById).then((date) => setUserById(date))
  })

  return userId ? (
    <>
      <div class='card bg-success bg-opacity-50'>
        <img src={avatar} class='card-img-top' alt='Avatar' />
        <div class='card-body'>
          <h5 class='card-title text-center'>{userId.name}</h5>
          <p class='card-text'>
            Встретился(раз):{' '}
            <span className='bold-style-for-card-text'>
              {userId.completedMeetings}
            </span>{' '}
          </p>
          <p class='card-text'>
            Профессия:{' '}
            <span className='bold-style-for-card-text'>
              {userId.profession.name}
            </span>{' '}
          </p>
          <p class='card-text'>
            Качества:
            <QualitiesList user={userId} />
          </p>
          <p class='card-text'>
            Оценка:{' '}
            <span className='bold-style-for-card-text'>{userId.rate}</span>{' '}
          </p>
          <div class='d-grid'>
            <Link type='button' className='btn btn-success ' to='/user'>
              All Users
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/user' component={User} />
      </Switch>
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
