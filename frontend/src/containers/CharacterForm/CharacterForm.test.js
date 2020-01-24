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

  it('calls handleInput on Character Name', () => {
    expect(wrapper.state('characterName')).toBe('');

    const mockEvent = {
      target: {
        name: 'characterName',
        value: 'Mike'
      }
    };

    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state('characterName')).toEqual('Mike');
  });

});