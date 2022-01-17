import React from 'react'
import PropTypes from 'prop-types'
import IconSort from './iconSort'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  return (
    <thead className='text-center bg-success bg-opacity-50'>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && 'button' }}
            scope='col'
          >
            {columns[column].name}
            <IconSort
              columnsPath={columns[column].path}
              selectedSort={selectedSort}
            />
          </th>
        ))}
        {/* 
        <th scope='col'>Качества</th>
        <th
          onClick={() => handleSort('profession.name')}
          role={'button'}
          scope='col'
        >
          Профессия
        </th>
        <th
          onClick={() => handleSort('completedMeetings')}
          role={'button'}
          scope='col'
        >
          Встретился(раз)
        </th>
        <th onClick={() => handleSort('rate')} role={'button'} scope='col'>
          Оценка
        </th>
        <th onClick={() => handleSort('bookmark')} role={'button'} scope='col'>
          Избранное
        </th>
        <th scope='col'></th> */}
      </tr>
    </thead>
  )
}
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
}
export default TableHeader
