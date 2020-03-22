import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

class ApiService {

  fetchAllCharacters() {
    return axios.get(`${API_URL}/characters`);
  }

  fetchCharacter(id) {
    return axios.get(`${API_URL}/character/${id}`);
  }

  updateCharacter(id) {
    return axios.patch(`${API_URL}/character/${id}`);
  }

  createCharacter() {
    return axios.post(`${API_URL}/character/`);
  }

  deleteCharacter(id) {
    return axios.delete(`${API_URL}/character/${id}`);
  }
}

export default new ApiService();