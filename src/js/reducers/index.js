import { combineReducers } from 'redux'
import departures from './departureReducer'

export default combineReducers({
  departures: departures
})
