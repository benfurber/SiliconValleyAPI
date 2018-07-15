import React from 'react';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Shows from '../Shows';

Enzyme.configure({adapter: new Adapter()})

describe('<Shows />', () => {
  let shows
  let eposideOne
  let episodes

  beforeEach(() => {
    eposideOne = {
      "name": "Minimum Viable Product",
      "image": "http://static.tvmaze.com/uploads/images/medium_landscape/49/123633.jpg",
      "season": 1
    }
    shows = mount(<Shows />)
    shows.setState({ episodes: [eposideOne] })
  })

  it('props prepare eposides', () => {
    expect(shows.text()).toContain(eposideOne.name)
  })

  it('Input field filters the results', () => {
    const userInput = 'the'
    const input = shows.find('input')

    input.simulate('change', { target: { value: userInput } })

    expect(shows.text()).not.toContain(eposideOne.name)
  })

})
