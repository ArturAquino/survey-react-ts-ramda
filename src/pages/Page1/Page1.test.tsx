import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page1 from './Page1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});