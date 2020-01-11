import React from 'react';
import { shallow } from 'enzyme';
import Stats from './Stats';

describe('Stats', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Stats/>);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});