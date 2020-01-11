import React from 'react';
import { shallow } from 'enzyme';
import ButtonPanel from './ButtonPanel';

describe('ButtonPanel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonPanel />);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});