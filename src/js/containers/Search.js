import { connect } from 'react-redux'
import { searchDepartures } from '../actions'
import Search from '../components/Search.jsx'

const mapDispatchToProps = dispatch => {
  return {
    onSearchDepartures: query => {
      dispatch(searchDepartures(query))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)
