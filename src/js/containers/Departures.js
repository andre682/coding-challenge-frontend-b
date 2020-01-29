import React from 'react'
import { connect } from 'react-redux'
import Departure from '../components/Departure.jsx'

function DepartureList({ departures: data }) {
  console.log('componentsdepartures')
  console.log(data.departures)
  console.log(data.departures.length)
  if (data.departures.length == 0) {
    return <div>No Trips</div>
  } else {
    return (
      <div>
        {data.departures.map(departure => {
          console.log(departure)
          return (
            <div key={departure.busbud_departure_id}>
              <p>{departure.arrival_time}</p>
              <p>{departure.origin_location_id}</p>
              <p>{departure.destination_location_id}</p>
              <p>{departure.operator_id}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state')
  console.log(state)
  return {
    departures: state.departures
  }
}

export default connect(mapStateToProps, null)(DepartureList)
