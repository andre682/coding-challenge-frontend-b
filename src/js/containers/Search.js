import { connect } from 'react-redux'
import { fetchSelectedDepartures } from '../actions'
import Search from '../components/Search.jsx'

const mapDispatchToProps = dispatch => {
  return {
    onSearchDepartures: query => {
      dispatch(fetchSelectedDepartures(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
