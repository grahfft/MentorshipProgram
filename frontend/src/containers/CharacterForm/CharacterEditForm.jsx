import React, { Component } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import ApiService from "../../service/ApiService";

class CharacterEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      characterName: '',
      characterClass: '',
      classOptions: ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Mystic", "Paladin",
          "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
      characterRace: '',
      raceOptions: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"],
      // alignment: '',
      // alignmentOptions: ["Lawful good", "Neutral good", "Chaotic good", "Lawful neutral", "Neutral", "Chaotic neutral",
      //     "Lawful evil", "Neutral evil", "Chaotic evil"],
      level: '',
      // experience: '',
      // strength: '',
      // dexterity: '',
      // constitution: '',
      // wisdom: '',
      // intelligence: '',
      // charisma: '',
      // message: null
    };
    this.onChange = this.onChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    ApiService.fetchCharacter(this.state.id)
      .then(response => this.setState({
        characterName: response.data.name,
        characterClass: response.data.characterClass.name,
        characterRace: response.data.characterRace.name,
        // alignment: response.data.alignment,
        level: response.data.level,
        // experience: response.data.experience,
        // strength: response.data.strength,
        // dexterity: response.data.dexterity,
        // constitution: response.data.constitution,
        // wisdom: response.data.wisdom,
        // intelligence: response.data.intelligence,
        // charisma: response.data.charisma
      }));

    // fetch('./options.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       classOptions: data.classOptions,
    //       raceOptions: data.raceOptions,
    //       alignmentOptions: data.alignmentOptions
    //     });
    //   });
  }

  handleEdit = (e) => {
    let character = {
      id: this.state.id,
      name: e.characterName,
      characterClass: e.characterClass,
      characterRace: e.characterRace,
      level: e.level
    }

    ApiService.updateCharacter(this.state.id, character)
      .then(() => this.props.history.push('/characters/'))
  };

  onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <h5 className={'title'}>Character Information</h5>
        <form id={'character-form'}>
          <Input
            type={'text'}
            title={'Character Name'}
            name={'characterName'}
            value={this.state.characterName}
            handleChange={this.onChange}
            placeholder={'Enter character name'}
          />
          <Input
            type={'text'}
            title={'Class: '}
            name={'characterClass'}
            value={this.state.characterClass}
            handleChange={this.onChange}
            placeholder={'Enter character class'}
          />
          {/*<Select*/}
          {/*  title={'Class: '}*/}
          {/*  name={'characterClass'}*/}
          {/*  value={this.state.characterClass}*/}
          {/*  options={this.state.classOptions}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Select class'}*/}
          {/*/>*/}
          <Input
            type={'text'}
            title={'Race'}
            name={'characterRace'}
            value={this.state.characterRace}
            handleChange={this.onChange}
            placeholder={'Enter character race'}
          />
          {/*<Select*/}
          {/*  title={'Race: '}*/}
          {/*  name={'race'}*/}
          {/*  value={this.state.characterRace}*/}
          {/*  options={this.state.raceOptions}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Select race'}*/}
          {/*/>*/}
          {/*<Select*/}
          {/*  title={'Alignment: '}*/}
          {/*  name={'alignment'}*/}
          {/*  value={this.state.alignment}*/}
          {/*  options={this.state.alignmentOptions}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Select alignment'}*/}
          {/*/>*/}
          <Input
            type={'number'}
            title={'Level'}
            name={'level'}
            value={this.state.level}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Experience points'}*/}
          {/*  name={'experience'}*/}
          {/*  value={this.state.experience}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Strength'}*/}
          {/*  name={'strength'}*/}
          {/*  value={this.state.strength}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Dexterity'}*/}
          {/*  name={'dexterity'}*/}
          {/*  value={this.state.dexterity}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Constitution'}*/}
          {/*  name={'constitution'}*/}
          {/*  value={this.state.constitution}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Wisdom'}*/}
          {/*  name={'wisdom'}*/}
          {/*  value={this.state.wisdom}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Intelligence'}*/}
          {/*  name={'intelligence'}*/}
          {/*  value={this.state.intelligence}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  type={'number'}*/}
          {/*  title={'Charisma'}*/}
          {/*  name={'charisma'}*/}
          {/*  value={this.state.charisma}*/}
          {/*  handleChange={this.onChange}*/}
          {/*  placeholder={'Enter value'}*/}
          {/*/>*/}
          <Button
            title={'Edit'}
            action={this.handleEdit}
          />
        </form>
      </div>
    );
  }
}

export default CharacterEditForm;