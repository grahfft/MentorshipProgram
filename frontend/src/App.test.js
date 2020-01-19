import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });

  it('renders CharacterForm container', () => {
    expect(wrapper.find('CharacterForm')).toHaveLength(1);
  });
});

