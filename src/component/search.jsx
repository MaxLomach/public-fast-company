import React from 'react'
import { useState } from 'react/cjs/react.development'

const Search = ({ onSearch }) => {
  const [data, setData] = useState({ search: '' })
  const handlChange = ({ target }) => {
    setData({ [target.name]: target.value })
    onSearch(target.value)
  }
  return (
    <form className='d-flex'>
      <input
        className='form-control mb-2'
        type='search'
        placeholder='Search'
        aria-label='Search'
        name='search'
        value={data.search}
        onChange={handlChange}
      />
    </form>
  )
}

export default Search
