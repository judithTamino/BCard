import axios from 'axios';
import { IUser } from '../interfaces/users/IUser';
import { ILogin } from '../interfaces/forms/ILogin';

const API: string = import.meta.env.VITE_USERS_API;

// Signup new user
export function signup(user: IUser) {
  return axios.post(API, user);
}

// Login
export const userLogin = (user: ILogin) => {
  return axios.post(`${API}/login`, user);
};

// Get user by ID
export const getUser = (id: string, token:any) => {
  return axios.get(`${API}/${id}`, {
    headers: { 'x-auth-token': token },
  });
};
