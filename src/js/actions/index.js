import { FETCH_DEPARTURES } from './types'
import axios from 'axios'
const apiUrl = 'https://napi.busbud.com/x-departures' //:origin/:destination/:outbound_date'
const headers = {
  Accept: 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
  'X-Busbud-Token': 'PARTNER_AHm3M6clSAOoyJg4KyCg7w'
}
export const fetchDepartures = payload => {
  console.log(payload)
  return {
    type: FETCH_DEPARTURES,
    payload
  }
}
export const fetchSelectedDepartures = ({ origin, destination, outbound_date }) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: [apiUrl, origin, destination, outbound_date].join('/'),
      headers
    })
      .then(response => {
        dispatch(fetchDepartures(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}
