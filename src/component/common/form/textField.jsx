import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react/cjs/react.development'

const TextField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  defaultValue
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  const getInputClasses = () => {
    return 'form-control' + (error ? ' is-invalid' : '')
  }

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className='mb-4 '>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <div className='input-group has-validation'>
        <input
          className={getInputClasses()}
          type={showPassword ? 'text' : type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          defaultValue={defaultValue}
        />
        {type === 'password' && (
          <button
            className={'btn ' + (!showPassword ? 'btn-success' : 'btn-danger')}
            type='button'
            onClick={toggleShowPassword}
          >
            <i className={'bi bi-eye' + (!showPassword ? '-slash' : '')}></i>
          </button>
        )}

        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </div>
  )
}
TextField.defaultProps = { type: 'text' }
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
