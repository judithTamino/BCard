import axios from 'axios';
import { IUser } from '../interfaces/users/IUser';
import { ILogin } from '../interfaces/forms/ILogin';

const API: string =
  'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

const token: any = sessionStorage.getItem('token');

// Signup new user
export function signup(user: IUser) {
  return axios.post(API, user);
}

// Login
export const userLogin = (user: ILogin) => {
  return axios.post(`${API}/login`, user);
};

// Get user by ID
export const getUser = (id: string) => {
  return axios.get(`${API}/${id}`, {
    headers: { 'x-auth-token': token },
  });
};
