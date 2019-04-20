import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NPSComponent from './NPSComponent';
import { render } from '../../enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NPSComponent callback={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it has 11 buttons', () => {
    const component = render(<NPSComponent callback={() => {}}/>);
    expect(component.find('.nps-list')).toBeDefined();
    expect(component.find('.nps-item')).toHaveLength(11);
});