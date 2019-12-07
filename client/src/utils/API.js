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
  
  addPlant: (plant) => {
      return axios.post(`/api/plant/${plant}`)
  },
  // Add to User Garden
  addToGarden: (data) => {
    return axios.post("/api/garden/", data);
  },
  // Get User Garden
  getUserGarden: (gardenId) => {
    return axios.get("/api/garden/3");
  },
  getPlants: (data) => {
    return axios.get('/api/plant')
  },
  deletePlant: (data) => {
    return axios.delete("/api/garden/", data);
  }
};