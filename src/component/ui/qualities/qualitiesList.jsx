import React from 'react'
import PropTypes from 'prop-types'

const QualitiesList = ({ user }) => {
  return user.qualities.map((qualities) => (
    <span key={user._id} className={`mx-1 badge bg-${qualities.color}`}>
      {`${qualities.name} `}
    </span>
  ))
}
QualitiesList.propTypes = { qualities: PropTypes.array.isRequired }
export default QualitiesList
