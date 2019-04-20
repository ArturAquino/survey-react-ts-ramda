import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NPSItem from './NPSItem';
import { shallow } from '../../enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NPSItem label={1} color="red" onSelect={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('it has label "2"', () => {
    const component = shallow(<NPSItem label={2} color="blue" onSelect={() => {}}/>);
    expect(component.find('.nps-item')).toBeDefined();
    expect(component.find('.nps-item').text()).toBe("2");
});