import PropTypes from 'prop-types'
import React from 'react'

const Info = (props) => {
  const styles = 'badge bg-info text-dark my-3 d-block'

  return props.itemsCount === 0 ? (
    <h1>
      <span className={`${styles} bg-danger`}>Нет ни кого!</span>
    </h1>
  ) : props.itemsCount === 1 ? (
    <h1>
      <span
        className={styles}
      >{`${props.itemsCount} человек проведёт с тобой время`}</span>
    </h1>
  ) : props.itemsCount === 2 ||
    props.itemsCount === 3 ||
    props.itemsCount === 4 ? (
    <h1>
      <span
        className={styles}
      >{`${props.itemsCount} человека проведёт с тобой время`}</span>
    </h1>
  ) : (
    <h1>
      <span
        className={styles}
      >{`${props.itemsCount} человек проведут с тобой время`}</span>
    </h1>
  )
}
Info.propTypes = {
  itemsCount: PropTypes.number.isRequired
}

export default Info
