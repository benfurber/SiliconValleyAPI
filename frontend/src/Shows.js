import React, { Component } from 'react';

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      episodes: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/episodes')
    .then(episodes => { return episodes.json() })
    .then(episodes => this.setState({ episodes }))
  }

  episodes () {
    return this.state.episodes
  }

  render() {
    let episodes = this.episodes().map((episode, index) => {
      return <div key={index}>{episode.name}</div>
    })

    return (
      <div className="Shows">
        {episodes}
      </div>
    );
  }
}

export default Shows;
