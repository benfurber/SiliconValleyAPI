import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Episode from './Episode'

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      episodes: [],
      nameFilter: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this._fetchEmails()
  }

  handleChange (event) {
    this.setState({ nameFilter: event.target.value })
    this.episodes()
  }

  episodes () {
    return this.state.episodes.filter(
      episode => episode.name.toLocaleLowerCase().includes(
        this.state.nameFilter.toLocaleLowerCase()
      )
    )
  }

  filterResults () {
    return this.episodes().filter(episode => episode.name === this.nameFilter)
  }

  _fetchEmails () {
    return fetch('http://localhost:8000/episodes')
    .then(episodes => { return episodes.json() })
    .then(episodes => this.setState({ episodes }))
    .catch((err) => 'Error: ' + err)
  }

  render () {
    let episodes = this.episodes().map((episode, index) => {
      return <Episode key={index} details={episode} />
    })

    return (
      <div className="Shows">
        <form>
          <label>Search Episode Title: </label>
          <input type="text" value={this.state.nameFilter} onChange={this.handleChange} />
        </form>

        <br/>

        <Card.Group>
          {episodes}
        </Card.Group>
      </div>
    );
  }
}

export default Shows;
