import React from 'react';
import ReactDOM from 'react-dom';
import Shows from '../Shows';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shows />, div);
  ReactDOM.unmountComponentAtNode(div);
});
