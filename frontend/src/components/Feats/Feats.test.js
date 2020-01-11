import React from 'react';
import { shallow } from 'enzyme';
import Feats from './Feats';

describe('Feats', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Feats />);
  });

  it('renders without error', () => {
    expect(wrapper.find('.title')).toHaveLength(1);
  });
});