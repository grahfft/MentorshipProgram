import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import Button from '../components/Button'

class ListCharacters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      message: null
    };
    this.loadCharacterList = this.loadCharacterList.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.editCharacter = this.editCharacter.bind(this);
    this.addCharacter = this.addCharacter.bind(this);
  }

  componentDidMount() {
    this.loadCharacterList();
    console.log("I finished mounting")
  }

  loadCharacterList() {
    ApiService.fetchAllCharacters()
      .then(res => {
          this.setState({characters: res.data});
          console.log(this.state.characters);
        })
  };

  deleteCharacter(uuid) {
    ApiService.deleteCharacter(uuid)
      .then(() => {
        this.setState({message : 'Character deleted successfully.'});
        this.setState({characters: this.state.characters.filter(character => character.uuid !== uuid)});
      })
  }

  editCharacter(characterId) {
    this.props.history.push(`/character/${characterId}`);
  }

  addCharacter() {
    this.props.history.push('/character/create');
  }

  render() {
    console.log("I am rendering")
    return (
      <div>
        <Button
          title={'Create'}
          action={this.addCharacter}
        />
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Race</th>
              <th>Level</th>
              {/*<th>Experience</th>*/}
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.characters.map(
                character =>
                  <tr key={character.uuid}>
                    <td>{character.name}</td>
                    <td>{character.characterClass.name}</td>
                    <td>{character.characterRace.name}</td>
                    <td>{character.level}</td>
                    {/*<td>{character.experience}</td>*/}
                    {/*<td>*/}
                    {/*  <Button*/}
                    {/*    title={'Delete'}*/}
                    {/*    action={this.deleteCharacter(character.id)}*/}
                    {/*  />*/}
                    {/*</td>*/}
                    {/*<td>*/}
                    {/*  <Button*/}
                    {/*    title={"Edit"}*/}
                    {/*    action={this.editCharacter(character.id)}*/}
                    {/*  />*/}
                    <td><button className="btn btn-success" onClick={() => this.deleteCharacter(character.uuid)}>Delete</button></td>
                    <td><button className="btn btn-success" onClick={() => this.editCharacter(character.uuid)}>Edit</button></td>
                    {/*</td>*/}
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

}

export default ListCharacters;