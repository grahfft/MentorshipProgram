import React from 'react';
import { shallow } from 'enzyme';
import CharacterForm from './CharacterForm';

describe('CharacterForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterForm />);
  });

  it('renders without error', () => {
    expect(wrapper.find('.form-container')).toHaveLength(1);
  });
});