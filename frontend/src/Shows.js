import React, { Component } from 'react';
import { Card, Container, Divider, Form, Segment } from 'semantic-ui-react'
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
      <Container className='Shows' textAlign='center'>
        <Divider hidden />

        <Segment inverted color='blue'>
          <Form inverted>
            <Form.Field inline>
              <label>Search Episode Title: </label>
              <input type='text' value={this.state.nameFilter} onChange={this.handleChange} />
            </Form.Field>
          </Form>
        </Segment>

        <Divider hidden />

        <Card.Group centered>
          {episodes}
        </Card.Group>
      </Container>
    );
  }
}

export default Shows;
