import axios from 'axios';
import { IUser } from '../interfaces/users/IUser';
import { ILogin } from '../interfaces/forms/ILogin';

const API: string =
  'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

// Signup new user
export function signup(user: IUser) {
  return axios.post(API, user);
}


// Login
export const login = (user:ILogin) => {
  return axios.post(`${API}/login`, user);
}