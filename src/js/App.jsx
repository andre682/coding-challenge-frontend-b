import React, { Component } from 'react'
import Search from './containers/Search'
import Departures from './containers/Departures'
class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Departures />
      </div>
    )
  }
}

export default App
