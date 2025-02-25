import axios from 'axios';

// const API: string = import.meta.env.CARDS_API;
const API: string = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

// Get All Cards
export function getAllCards() {
  return axios.get(API);
} 
