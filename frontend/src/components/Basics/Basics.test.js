import React from 'react';
import { shallow } from 'enzyme';
import Basics from './Basics';

describe('Basics', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Basics/>);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});