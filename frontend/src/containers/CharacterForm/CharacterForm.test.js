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

  it('calls setState on character name', () => {
    expect(wrapper.state('characterName')).toBe('');

    const mockEvent = {
      target: {
        name: 'characterName',
        value: 'Mike'
      }
    };

    const character = {
      characterName: 'Mike',
      characterClass: '',
      classOptions: [],
      race: '',
      raceOptions: [],
      alignment: '',
      alignmentOptions: [],
      experience: 0,
      strength: 0,
      dexterity: 0,
      constitution: 0,
      wisdom: 0,
      intelligence: 0,
      charisma: 0,
    };
    wrapper.instance().handleInput(mockEvent);
    expect(wrapper.state()).toEqual(character);
  })
});