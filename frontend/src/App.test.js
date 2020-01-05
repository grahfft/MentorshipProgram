import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without error', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find('.title');
  expect(appComponent.length).toBe(1);
})
