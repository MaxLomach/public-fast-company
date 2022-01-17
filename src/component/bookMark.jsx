import PropTypes from 'prop-types'
import React from 'react'

const BookMark = (props) => {
  const Switch = (state) => {
    return state ? 'bi bi-toggle-on' : 'bi bi-toggle-off'
  }

  return (
    <button className='btn' onClick={props.onToggle}>
      <i className={Switch(props.bookmark)}></i>
    </button>
  )
}
BookMark.propTypes = {
  onToggle: PropTypes.func.isRequired,
  bookmark: PropTypes.bool.isRequired
}
export default BookMark
