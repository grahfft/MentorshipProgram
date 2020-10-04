import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class ApiService {

  fetchAllCharacters() {
    return axios.get(`${API_URL}/characters`);
  }

  fetchCharacter(uuid) {
    return axios.get(`${API_URL}/character/${uuid}`);
  }

  updateCharacter(uuid, character) {
    return axios.put(`${API_URL}/character/${uuid}`, character);
  }

  createCharacter(character) {
    return axios.post(`${API_URL}/character`, character)
  }

  deleteCharacter(uuid) {
    return axios.delete(`${API_URL}/character/${uuid}`);
  }
}

export default new ApiService();