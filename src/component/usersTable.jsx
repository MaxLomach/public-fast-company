import React from 'react'
import PropTypes from 'prop-types'
// import TableHeader from './tableHeader'
// import TableBody from './tableBody'
import BookMark from './bookMark'
import QualitiesList from './qualitiesList'
import Table from './table'
import { Link, Route, Switch } from 'react-router-dom'
import UserById from './userById'

const UserTable = ({ onSort, selectedSort, onDel, newState, users }) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => (
        <>
          <Link className='link-style' to={`userById/${user._id}`}>
            {user.name}
          </Link>
          <Switch>
            <Route path='/userById' component={UserById} />
          </Switch>
        </>
      )
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList user={user} />
    },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился(раз)' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <BookMark
          onToggle={() => {
            newState(user)
          }}
          {...user}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          className='btn btn-info btn-sm '
          onClick={() => onDel(user._id)}
        >
          Dellete
        </button>
      )
    }
  }
  return (
    <>
      <Table
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
        data={users}
      />
      {/* <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
      <TableBody {...{ columns, data: users }} /> */}
    </>
  )
}

UserTable.propTypes = {
  onDel: PropTypes.func,
  newState: PropTypes.func,
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  currentSort: PropTypes.object
}

export default UserTable
