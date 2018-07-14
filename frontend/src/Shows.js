import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import Episode from './Episode'

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      episodes: []
    }
  }

  componentDidMount () {
    this._fetchEmails()
  }

  _fetchEmails () {
    return fetch('http://localhost:8000/episodes')
    .then(episodes => { return episodes.json() })
    .then(episodes => this.setState({ episodes }))
    .catch((err) => 'Error: ' + err)
  }

  episodes () {
    return this.state.episodes
  }

  render() {
    let episodes = this.episodes().map((episode, index) => {
      return <Episode key={index} details={episode} />
    })

    return (
      <div className="Shows">
        <Card.Group>
          {episodes}
        </Card.Group>
      </div>
    );
  }
}

export default Shows;
