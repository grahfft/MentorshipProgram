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
        <form>
          <div className="form-group">
            <label>Character Name: </label>
            <input type="text" placeholder="Enter character name" name="characterName" value={this.state.characterName} onChange={this.onChange}/>
          </div>

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

          <div className="form-group">
            <label>Level: </label>
            <input type="text" placeholder="Enter level" name="level" value={this.state.level} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Experience: </label>
            <input type="text" placeholder="Enter experience" name="experience" value={this.state.experience} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Strength: </label>
            <input type="text" placeholder="Enter strength" name="strength" value={this.state.strength} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Dexterity: </label>
            <input type="text" placeholder="Enter dexterity" name="dexterity" value={this.state.dexterity} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Constitution: </label>
            <input type="text" placeholder="Enter constitution" name="constitution" value={this.state.constitution} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Wisdom: </label>
            <input type="text" placeholder="Enter wisdom" name="wisdom" value={this.state.wisdom} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Intelligence: </label>
            <input type="text" placeholder="Enter intelligence" name="intelligence" value={this.state.intelligence} onChange={this.onChange}/>
          </div>

          <div className="form-group">
            <label>Charisma: </label>
            <input type="text" placeholder="Enter charisma" name="charisma" value={this.state.charisma} onChange={this.onChange}/>
          </div>

          <button className="btn btn-success" onClick={this.handleCreate}>Save</button>
        </form>
      </div>
    );
  }
}


export default CharacterForm;