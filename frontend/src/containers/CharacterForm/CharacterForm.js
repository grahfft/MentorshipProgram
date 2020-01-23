import React, { Component } from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

class CharacterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
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
    this.handleInput = this.handleInput.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleLoad = this.handleLoad(this);
    this.handleQuit = this.handleQuit(this);
  }

  componentDidMount() {
    fetch('./options.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          classOptions: data.classOptions,
          raceOptions: data.raceOptions,
          alignmentOptions: data.alignmentOptions
        });
      });
  }

  handleInput(e) {
    this.setState( { [e.target.name]: e.target.value });
  }
  handleCreate(e) {
    e.preventDefault()
    const formPayload = {
      characterName: this.state.characterName,
      characterClass: this.state.characterClass,
      race: this.state.race,
      alignment: this.state.alignment,
      experience: this.state.experience,
      strength: this.state.strength,
      dexterity: this.state.dexterity,
      constitution: this.state.constitution,
      wisdom: this.state.wisdom,
      intelligence: this.state.intelligence,
      charisma: this.state.charisma
    }
    console.log('POST to backend', formPayload);
  }
  handleLoad() {
  }
  handleQuit() {
  }

  render() {
    return (
      <form className={'form-container'} onSubmit={this.handleCreate}>
        <h5 className={'title'}>Character Information</h5>
        <Input
          type={'text'}
          title={'Character Name'}
          name={'name'}
          value={this.state.characterName}
          handleChange={this.handleInput}
          placeholder={'Enter character name'}
        />
        <Select
          title={'Class'}
          name={'characterClass'}
          value={this.state.characterClass}
          options={this.state.classOptions}
          handleChange={this.handleInput}
          placeholder={'Select class'}
        />
        <Select
          title={'Race'}
          name={'race'}
          value={this.state.race}
          options={this.state.raceOptions}
          handleChange={this.handleInput}
          placeholder={'Select race'}
        />
        <Select
          title={'Alignment'}
          name={'alignment'}
          value={this.state.alignment}
          options={this.state.alignmentOptions}
          handleChange={this.handleInput}
          placeholder={'Select alignment'}
        />
        <Input
          type={'number'}
          title={'Experience points'}
          name={'currentExperience'}
          value={this.state.experience}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Strength'}
          name={'currentStrength'}
          value={this.state.strength}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Dexterity'}
          name={'currentDexterity'}
          value={this.state.dexterity}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Constitution'}
          name={'currentConstitution'}
          value={this.state.constitution}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Wisdom'}
          name={'currentWisdom'}
          value={this.state.wisdom}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Intelligence'}
          name={'currentIntelligence'}
          value={this.state.intelligence}
          handleChange={this.handleInput}
        />
        <Input
          type={'number'}
          title={'Charisma'}
          name={'currentCharisma'}
          value={this.state.charisma}
          handleChange={this.handleInput}
        />
        <Button
          title={'Create'}
          action={this.handleCreate}
        />
        <Button
          title={'Load'}
          action={this.handleLoad}
        />
        <Button
          title={'Quit'}
          action={this.handleQuit}
        />
      </form>
    );
  }
}

export default CharacterForm;