import { jwtDecode, JwtPayload } from 'jwt-decode';

export const decodeToken = (token:any) :JwtPayload  => {
  const decodeToken = jwtDecode(token as string);
  return decodeToken;
}