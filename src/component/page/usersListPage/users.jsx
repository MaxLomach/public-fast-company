import React, { useState, useEffect } from 'react'
import API from '../../../API'
import { paginate } from '../../../utils/paginate'
import Info from '../../ui/info'
import Pagination from '../../common/pagination.jsx'
import GroupList from './'
import UserTable from '../../ui/usersTable'
import _ from 'lodash'
import '../../../index'
import Search from '../../search'

const Users = () => {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({
    iter: 'name',
    order: 'asc'
  })
  const [users, setUsers] = useState()
  const [searchElement, setSearchElement] = useState('')

  const pageSize = 8

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
    setSearchElement()
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const handlSearch = (item) => {
    setSelectedProf()

    const searchUsers = users.filter(
      (user) => user.name.toLowerCase().indexOf(item) !== -1
    )
    setSearchElement(searchUsers)
  }

  if (users) {
    const filteredUsers = searchElement
      ? searchElement
      : selectedProf
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
            <Search onSearch={handlSearch} />
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
          <div className='spinner-border text-info' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users
