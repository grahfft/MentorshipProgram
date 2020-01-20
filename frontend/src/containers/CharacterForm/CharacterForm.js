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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClassSelect = this.handleClassSelect.bind(this);
    this.handleRaceSelect = this.handleRaceSelect.bind(this);
    this.handleAlignmentSelect = this.handleAlignmentSelect.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleStrengthChange = this.handleStrengthChange.bind(this);
    this.handleDexterityChange = this.handleDexterityChange.bind(this);
    this.handleConstitutionChange = this.handleConstitutionChange.bind(this);
    this.handleWisdomChange = this.handleWisdomChange.bind(this);
    this.handleIntelligenceChange = this.handleIntelligenceChange.bind(this);
    this.handleCharismaChange = this.handleCharismaChange.bind(this);
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

  handleNameChange(e) {
    this.setState({ characterName: e.target.value }, () => console.log('name', this.state.characterName));
  }
  handleClassSelect(e) {
    this.setState({ characterClass: e.target.value }, () => console.log('characterClass', this.state.characterClass));
  }
  handleRaceSelect(e) {
    this.setState({ race: e.target.value }, () => console.log('race', this.state.race));
  }
  handleAlignmentSelect(e) {
    this.setState({ alignment: e.target.value }, () => console.log('alignment', this.state.alignment));
  }
  handleExperienceChange(e) {
    this.setState({ experience: e.target.value }, () => console.log('currentExperience', this.state.experience));
  }
  handleStrengthChange(e) {
    this.setState({ strength: e.target.value }, () => console.log('currentStrength', this.state.strength));
  }
  handleDexterityChange(e) {
    this.setState({ dexterity: e.target.value }, () => console.log('currentDexterity', this.state.dexterity));
  }
  handleConstitutionChange(e) {
    this.setState({ constitution: e.target.value }, () => console.log('currentConstitution', this.state.constitution));
  }
  handleWisdomChange(e) {
    this.setState({ wisdom: e.target.value }, () => console.log('currentWisdom', this.state.wisdom));
  }
  handleIntelligenceChange(e) {
    this.setState({ intelligence: e.target.value }, () => console.log('currentIntelligence', this.state.intelligence));
  }
  handleCharismaChange(e) {
    this.setState({ charisma: e.target.value }, () => console.log('currentCharisma', this.state.charisma));
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
          handleChange={this.handleNameChange}
          placeholder={'Enter character name'}
        />
        <Select
          title={'Class'}
          name={'characterClass'}
          value={this.state.characterClass}
          options={this.state.classOptions}
          handleChange={this.handleClassSelect}
          placeholder={'Select class'}
        />
        <Select
          title={'Race'}
          name={'race'}
          value={this.state.race}
          options={this.state.raceOptions}
          handleChange={this.handleRaceSelect}
          placeholder={'Select race'}
        />
        <Select
          title={'Alignment'}
          name={'alignment'}
          value={this.state.alignment}
          options={this.state.alignmentOptions}
          handleChange={this.handleAlignmentSelect}
          placeholder={'Select alignment'}
        />
        <Input
          type={'number'}
          title={'Experience points'}
          name={'currentExperience'}
          value={this.state.experience}
          handleChange={this.handleExperienceChange}
        />
        <Input
          type={'number'}
          title={'Strength'}
          name={'currentStrength'}
          value={this.state.strength}
          handleChange={this.handleStrengthChange}
        />
        <Input
          type={'number'}
          title={'Dexterity'}
          name={'currentDexterity'}
          value={this.state.dexterity}
          handleChange={this.handleDexterityChange}
        />
        <Input
          type={'number'}
          title={'Constitution'}
          name={'currentConstitution'}
          value={this.state.constitution}
          handleChange={this.handleConstitutionChange}
        />
        <Input
          type={'number'}
          title={'Wisdom'}
          name={'currentWisdom'}
          value={this.state.wisdom}
          handleChange={this.handleWisdomChange}
        />
        <Input
          type={'number'}
          title={'Intelligence'}
          name={'currentIntelligence'}
          value={this.state.intelligence}
          handleChange={this.handleIntelligenceChange}
        />
        <Input
          type={'number'}
          title={'Charisma'}
          name={'currentCharisma'}
          value={this.state.charisma}
          handleChange={this.handleCharismaChange}
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