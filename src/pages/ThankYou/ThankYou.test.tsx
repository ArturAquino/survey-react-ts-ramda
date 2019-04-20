import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ThankYou from './ThankYou';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThankYou />, div);
  ReactDOM.unmountComponentAtNode(div);
});