// src/features/user/services/userService.js
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; 
// Replace with your real backend API

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};