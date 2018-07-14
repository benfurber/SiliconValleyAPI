import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class Episode extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.details.image} fluid />
        <Card.Content>
          <Card.Header>{this.props.details.name}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Episode;
