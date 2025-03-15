import axios from 'axios';

const API: string =
  'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards';
const token: string = sessionStorage.getItem('token') as string;

// Get All Cards
export function getAllCards() {
  return axios.get(API);
}

// Like / unlike card
export function likeUnlikeCard(id: string) {
  return axios.patch(
    `${API}/${id}`,
    {},
    { headers: { 'x-auth-token': token } }
  );
}
