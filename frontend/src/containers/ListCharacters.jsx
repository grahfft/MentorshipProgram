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
  }

  loadCharacterList() {
    ApiService.fetchAllCharacters()
      .then(res => {
        this.setState({ characters: res.data });
        console.log(this.state.characters);
      });
  }

  deleteCharacter(characterId) {
    ApiService.deleteCharacter(characterId)
      .then(res => {
        this.setState({message : 'Character deleted successfully.'});
        this.setState({characters: this.state.characters.filter(character => character.id !== characterId)});
      })
  }

  editCharacter(characterId) {
    this.props.history.push(`/character/${characterId}`);
  }

  addCharacter() {
    this.props.history.push('/character/create');
  }

  render() {
    return (
      <div>
        <Button
          title={'Create'}
          action={this.addCharacter}
        />
        {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th className='hidden'>Id</th>
              <th>Name</th>
              <th>Class</th>
              <th>Race</th>
              <th>Level</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.characters.map(
                character =>
                  <tr key={character.id}>
                    <td>{character.name}</td>
                    <td>{character.className}</td>
                    <td>{character.race}</td>
                    <td>{character.level}</td>
                    <td>{character.experience}</td>
                    <td>
                      <Button
                        title={'Delete'}
                        action={this.deleteCharacter(character.id)}
                      />
                      <Button
                        title={"Edit"}
                        action={this.editCharacter(character.id)}
                      />
                      {/*<button className="btn btn-success" onClick={() => this.deleteCharacter(character.id)}>Delete</button>*/}
                      {/*<button className="btn btn-success" onClick={() => this.editCharacter(character.id)}>Edit</button>*/}
                    </td>
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