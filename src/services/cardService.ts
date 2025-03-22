import axios from 'axios';
import { Card } from '../interfaces/cards/Card';

const API: string = import.meta.env.VITE_CARDS_API;

// Get All Cards
export function getAllCards() {
  return axios.get(API);
}

// Create new card
export function CreateNewCard(card: Card, userToken: any) {
  return axios.post(API, card, {
    headers: {
      'x-auth-token': userToken,
    },
  });
}

// Like / unlike card
export function likeUnlikeCard(id: string, token: any) {
  return axios.patch(
    `${API}/${id}`,
    {},
    { headers: { 'x-auth-token': token } }
  );
}

// Get all my cards
export function getAllMyCards() {
  return axios.get(`${API}/my-cards`, {
    headers: { 'x-auth-token': sessionStorage.getItem('token') },
  });
}

// Delete Card
export function deleteCard(cardId: string) {
  return axios.delete(`${API}/${cardId}`, {
    headers: { 'x-auth-token': sessionStorage.getItem('token') },
  });
}

// Get card by id
export function getCardById(cardId: string) {
  return axios.get(`${API}/${cardId}`, {
    headers: { 'x-auth-token': sessionStorage.getItem('token') },
  });
}

// Update card
export function updateCard(cardId: string, card:Card) {
  return axios.put(
    `${API}/${cardId}`,card,
    {
      headers: { 'x-auth-token': sessionStorage.getItem('token') },
    }
  );
}
