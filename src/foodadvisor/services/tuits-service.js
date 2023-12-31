import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/rates`;

export const createTuit = async (tuit) => { const response = await axios.post(TUITS_API, tuit)
  return response.data;
}
export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}


export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`)
  return response.data
}
export const fetchUserRatings = async (userId) => {
  const response = await axios.get(`${API_BASE}/ratings/user/${userId}`);
  return response.data;
};


export const updateTuit = async (tuit) => {
  const response = await axios
  .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}
export const searchTuits = async (query) => {
  const response = await axios.get(`${TUITS_API}/search`, { params: { q: query } });
  return response.data;
}
export const rateRestaurant = async (ratingData) => {
  const response = await axios.post(`${API_BASE}/rateRestaurant`, ratingData);
  return response.data;
};




