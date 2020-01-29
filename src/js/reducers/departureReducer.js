import { FETCH_DEPARTURES } from '../actions/types'
const defaultState = {
  cities: [],
  cities: [],
  locations: [],
  operators: [],
  departures: [],
  complete: false
}
export default function departureReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DEPARTURES:
      console.log(action)
      return {
        ...state,
        cities: action.cities,
        cities: action.cities,
        locations: action.locations,
        operators: action.operators,
        departures: action.departures,
        complete: action.complete
      }
    default:
      return state
  }
}
