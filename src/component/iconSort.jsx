import React from 'react'

const IconSort = ({ columnsPath, selectedSort }) => {
  let newClassName = ''
  if (selectedSort.order === 'asc') {
    newClassName = 'bi bi-sort-down'
  } else {
    newClassName = 'bi bi-sort-up-alt'
  }
  return (
    columnsPath !== undefined &&
    columnsPath === selectedSort.path && <i className={`${newClassName}`}></i>
  )
}

export default IconSort
