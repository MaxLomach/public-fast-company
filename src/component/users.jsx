import React, { useState, useEffect } from 'react'
import API from '../API'
import { paginate } from '../utils/paginate'
import GetUserApi from './getUserApi'
import Info from './info'
import Pagination from './pagination'
import GroupList from './groupList'

const Users = ({ users, handleDelId, newState }) => {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProf, setSelectedProf] = useState()

  const pageSize = 4

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
  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession._id === selectedProf._id)
    : users
  console.log(professions)

  const count = filteredUsers.length

  const userCrop = paginate(filteredUsers, currentPage, pageSize)

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
          <div className='table-responsive-lg'>
            <table className='table table-bordered table-hover bg-success bg-opacity-25'>
              <thead className='text-center bg-success bg-opacity-50'>
                <tr>
                  <th scope='col'>Имя</th>
                  <th scope='col'>Качества</th>
                  <th scope='col'>Профессия</th>
                  <th scope='col'>Встретился(раз)</th>
                  <th scope='col'>Оценка</th>
                  <th scope='col'>Избранное</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <GetUserApi
                  key={''}
                  onDel={handleDelId}
                  newState={newState}
                  users={userCrop}
                  {...users}
                />
              </tbody>
            </table>
          </div>
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

export default Users
