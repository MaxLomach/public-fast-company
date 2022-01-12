import React, { useState, useEffect } from 'react'
import './index.css'
import API from './API'
import Users from './component/users'

const App = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    API.users.fetchAll().then((date) => setUsers(date))
  }, [])

  const newState = (user) => {
    const newBookmark = users.map((element) => {
      if (element._id === user._id) {
        if (element.bookmark === true) {
          element.bookmark = false
        } else {
          element.bookmark = true
        }
      }
      return element
    })
    setUsers(newBookmark)
  }

  const handleDelId = (id) => {
    setUsers(users.filter((user) => user._id !== id))
  }

  return (
    <>
      {users && (
        <Users users={users} handleDelId={handleDelId} newState={newState} />
      )}
    </>
  )
}

export default App
