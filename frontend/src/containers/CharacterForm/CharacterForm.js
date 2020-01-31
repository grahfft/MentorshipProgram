import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

class CharacterForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      characterName: '',
      characterClass: '',
      classOptions: [],
      race: '',
      raceOptions: [],
      alignment: '',
      alignmentOptions: [],
      level: '',
      experience: '',
      strength: '',
      dexterity: '',
      constitution: '',
      wisdom: '',
      intelligence: '',
      charisma: '',
      message: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
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

  handleCreate = async (e) => {
    e.preventDefault();

    const {
      characterName, characterClass, race, alignment, level, experience, strength, dexterity, constitution, wisdom,
      intelligence, charisma
    } = this.state;

    axios.post('http://localhost:8080/api/character', {
      characterName, characterClass, race, alignment, level, experience, strength, dexterity,
      constitution, wisdom, intelligence, charisma
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.setState({message: 'Character added successfully.'});
        this.props.history.push("/")
      });
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
          <Select
            title={'Class: '}
            name={'characterClass'}
            value={this.state.characterClass}
            options={this.state.classOptions}
            handleChange={this.onChange}
            placeholder={'Select class'}
          />
          <Select
            title={'Race: '}
            name={'race'}
            value={this.state.race}
            options={this.state.raceOptions}
            handleChange={this.onChange}
            placeholder={'Select race'}
          />
          <Select
            title={'Alignment: '}
            name={'alignment'}
            value={this.state.alignment}
            options={this.state.alignmentOptions}
            handleChange={this.onChange}
            placeholder={'Select alignment'}
          />
          <Input
            type={'number'}
            title={'Level'}
            name={'level'}
            value={this.state.level}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Experience points'}
            name={'experience'}
            value={this.state.experience}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Strength'}
            name={'strength'}
            value={this.state.strength}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Dexterity'}
            name={'dexterity'}
            value={this.state.dexterity}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Constitution'}
            name={'constitution'}
            value={this.state.constitution}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Wisdom'}
            name={'wisdom'}
            value={this.state.wisdom}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Intelligence'}
            name={'intelligence'}
            value={this.state.intelligence}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Input
            type={'number'}
            title={'Charisma'}
            name={'charisma'}
            value={this.state.charisma}
            handleChange={this.onChange}
            placeholder={'Enter value'}
          />
          <Button
            title={'Create'}
            action={this.handleCreate}
          />
        </form>
      </div>
    );
  }
}

export default CharacterForm;