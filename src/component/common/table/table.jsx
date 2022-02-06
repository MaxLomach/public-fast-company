import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import PropTypes from 'prop-types'

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <div className='table-responsive-lg'>
      <table className='table table-bordered table-hover text-center bg-success bg-opacity-25'>
        {children || (
          <>
            <TableHeader
              onSort={onSort}
              selectedSort={selectedSort}
              columns={columns}
            />
            <TableBody {...{ columns, data }} />
          </>
        )}
      </table>
    </div>
  )
}
Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array
}

export default Table
