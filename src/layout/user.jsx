import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import UserById from '../component/page/userPage/userById'
import UserEdit from '../component/page/userPage/userEdit'
import Users from '../component/page/usersListPage'

const User = () => {
  const { userById, edit } = useParams()

  return (
    <>
      {edit ? (
        <UserEdit />
      ) : userById ? (
        <UserById userById={userById} />
      ) : (
        <Users />
      )}
    </>
  )
}

export default User
