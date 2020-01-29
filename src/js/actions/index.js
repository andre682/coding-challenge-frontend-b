import { FETCH_DEPARTURES } from './types'
import axios from 'axios'
import moment from 'moment'

const apiUrl = 'https://napi.busbud.com/x-departures' //:origin/:destination/:outbound_date'
const headers = {
  Accept: 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
  'X-Busbud-Token': 'PARTNER_AHm3M6clSAOoyJg4KyCg7w'
}

export const fetchDeparturess = payload => {
  return {
    type: FETCH_DEPARTURES,
    cities: payload.cities,
    locations: payload.locations,
    operators: payload.operators,
    departures: payload.departures,
    complete: payload.complete
  }
}
export const fetchSelectedDepartures = ({ origin, destination, outbound_date }) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: [
        apiUrl,
        origin,
        destination,
        moment(outbound_date, 'YYYY-MM-DD').format('YYYY-MM-DD')
      ].join('/'),
      headers
    })
      .then(response => {
        dispatch(fetchDeparturess(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}
