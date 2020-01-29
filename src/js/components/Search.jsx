import React from 'react'
import moment from 'moment'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      origin: 'dr5reg',
      destination: 'f25dvk',
      outbound_date: moment('2020-08-02', 'YYYY-MM-DD'),
      adult: 1,
      child: 0,
      senior: 0
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (
      this.state.origin.trim() &&
      this.state.destination.trim() &&
      this.state.outbound_date.isValid() &&
      this.state.adult + this.state.senior >= 1
    ) {
      this.props.onSearchDepartures(this.state)
    }
  }

  handleReset = () => {
    this.setState({
      origin: '',
      destination: '',
      outbound_date: '',
      adult: 1,
      child: 0,
      senior: 0
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Origin"
              name="origin"
              onChange={this.handleInputChange}
              value={this.state.origin}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Destination"
              name="destination"
              onChange={this.handleInputChange}
              value={this.state.destination}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Date"
              name="outbound_date"
              onChange={this.handleInputChange}
              value={this.state.outbound_date}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Adults"
              name="adult"
              onChange={this.handleInputChange}
              value={this.state.adult}
            />
            <input
              type="number"
              placeholder="Childs"
              name="child"
              onChange={this.handleInputChange}
              value={this.state.child}
            />
            <input
              type="number"
              placeholder="Seniors"
              name="senior"
              onChange={this.handleInputChange}
              value={this.state.senior}
            />
          </div>
          <div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
