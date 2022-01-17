import React, { useState, useEffect } from 'react'
import API from '../API'
import { paginate } from '../utils/paginate'
import Info from './info'
import Pagination from './pagination'
import GroupList from './groupList'
import UserTable from './usersTable'
import _ from 'lodash'
import '../index'

const Users = () => {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({
    iter: 'name',
    order: 'asc'
  })
  const pageSize = 8

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

  useEffect(() => {
    API.professions.fetchAll().then((date) => setProfessions(date))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProffesionSelect = (item) => {
    setSelectedProf(item)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => user.profession._id === selectedProf._id)
      : users

    const count = filteredUsers.length

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])

    const userCrop = paginate(sortedUsers, currentPage, pageSize)

    const clearFilter = () => {
      setSelectedProf()
    }

    return count === 0 ? (
      <Info itemsCount={count} {...users} />
    ) : (
      <div className='container-fluid'>
        <div className='row'>
          <Info itemsCount={count} {...users} />
        </div>
        <div className='row'>
          <div className='col-lg-2 col-md-2'>
            {professions && (
              <>
                <GroupList
                  selectedItem={selectedProf}
                  items={professions}
                  onItemSelect={handleProffesionSelect}
                />
                <div className='d-grid'>
                  <button
                    className='btn  btn-outline-success btn-sm mt-2 mb-2'
                    onClick={clearFilter}
                  >
                    {' '}
                    Очистить
                  </button>
                </div>
              </>
            )}
          </div>
          <div className='col-lg-10 col-md-10 '>
            <UserTable
              users={userCrop}
              onDel={handleDelId}
              newState={newState}
              onSort={handleSort}
              selectedSort={sortBy}
            />
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='container-for-loader'>
        <div className='loader'>
          <div class='spinner-border text-info' role='status'>
            <span class='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users
