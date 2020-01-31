import React from 'react';
import { shallow } from 'enzyme';
import CharacterForm from './CharacterForm';

describe('CharacterForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CharacterForm />);
  });

  it('renders without error', () => {
    expect(wrapper.find('#character-form')).toHaveLength(1);
  });

  it('calls onChange on Character Name', () => {
    expect(wrapper.state('characterName')).toBe('');

    const mockEvent = {
      target: {
        name: 'characterName',
        value: 'Mike'
      }
    };

    wrapper.instance().onChange(mockEvent);
    expect(wrapper.state('characterName')).toEqual('Mike');
  });

  it('calls onChange on Experience', () => {
    expect(wrapper.state('experience')).toBe('');

    const mockEvent = {
      target: {
        name: 'experience',
        value: '27'
      }
    };

    wrapper.instance().onChange(mockEvent);
    expect(wrapper.state('experience')).toEqual('27');
  });

});