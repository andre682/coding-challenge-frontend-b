import React from 'react'

export default ({ departure: { operator_id, available_seats } }) => {
  return (
    <div>
      <h2>{operator_id}</h2>
      <p>{available_seats}</p>
    </div>
  )
}
