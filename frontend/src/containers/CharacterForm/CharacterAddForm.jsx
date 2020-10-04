import React, { Component } from 'react';
import axios from 'axios';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import ApiService from "../../service/ApiService";

class CharacterAddForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      // id: this.props.match.params.id,
      characterName: '',
      characterClass: '',
      // classOptions: ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Mystic", "Paladin",
      //   "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
      characterRace: '',
      // raceOptions: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"],
      // alignment: '',
      // alignmentOptions: ["Lawful good", "Neutral good", "Chaotic good", "Lawful neutral", "Neutral", "Chaotic neutral",
      //   "Lawful evil", "Neutral evil", "Chaotic evil"],
      level: '',
      // experience: '',
      // strength: '',
      // dexterity: '',
      // constitution: '',
      // wisdom: '',
      // intelligence: '',
      // charisma: '',
      // message: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  // handleCreate = async (e) => {
  //   e.preventDefault();
  //
  //   const {characterName, characterClass, race, level} = this.state;
  //
  //   axios.post('http://localhost:8080/api/character', {
  //     characterName, characterClass, race, level}, {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //       this.setState({message: 'Character added successfully.'});
  //       this.props.history.push("/")
  //     });
  // };

  handleCreate = (e) => {
    let character = {
      // id: this.state.id,
      name: e.characterName,
      characterClass: e.characterClass,
      characterRace: e.characterRace,
      level: e.level
    }
    ApiService.createCharacter(character)
      .then((response) => console.log(response))
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
          <button className="btn btn-success" onSubmit={this.handleCreate}>Save</button>
          {/*<Button*/}
          {/*  title={'Create'}*/}
          {/*  action={this.handleCreate}*/}
          {/*/>*/}
        </form>
      </div>
    );
  }
}

export default CharacterAddForm;