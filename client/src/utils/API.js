import axios from 'axios';


export default {
  // Create a User via google or email/password signin
  createUser: (data) => {
    return axios.post("/api/user", data);
  },
  // Search for a plant
  searchPlant: (plant) => {
    return axios.get(`/api/plant/${plant}`);
  },
  // Add to User Garden
  addToGarden: (data) => {
    return axios.get("/api/garden/", data);
  },
  // Get User Garden
  getUserGarden: (gardenId) => {
    return axios.delete(`/api/garden/${gardenId}`);
  },
  getPlants: (data) => {
    return axios.get('/api/plant')
  }
};