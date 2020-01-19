import React, { Component } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCharacter: {
        characterName: '',
        characterClass: [],
        race: [],
        alignment: [],
        experience: '',
        strength: [],
        dexterity: [],
        constitution: [],
        wisdom: [],
        intelligence: [],
        charisma: [],
        featureName: [],
      },
      classOptions: ['Artificer', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Mystic', 'Paladin',
        'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'],
      raceOptions: ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'],
      alignmentOptions: ['Lawful good', 'Neutral good', 'Chaotic good', 'Lawful neutral', 'Neutral', 'Chaotic neutral',
        'Lawful evil', 'Neutral evil', 'Chaotic evil'],
      abilityOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
        '18'],
  };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleLoad = this.handleLoad(this);
    this.handleQuit = this.handleQuit(this);
  }

  handleCreate() {

  }
  handleLoad() {

  }
  handleQuit() {

  }

  render() {
    return (
      <form className={'form-container'} onSubmit={this.handleCreate}>
        <h5 className={'title'}>Character Information</h5>
        <Input />
        <Input />
        <Select />
        <Button />
      </form>
    );
  }
}

export default CharacterForm;