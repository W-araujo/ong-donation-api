import JWT from 'jsonwebtoken';
import Ong from '../models/Ong';

const jwtKey = process.env.JWT_SECRET;

function tokenGenerator(ong: Ong) {
  return JWT.sign(
    {
      id: ong.id,
      email: ong.email,
      role: ong.role,
    },
    String(jwtKey),
    {
      expiresIn: '1h',
    },
  );
}

function decode(token: string) {
  return JWT.verify(token, String(jwtKey));
}

export { tokenGenerator, decode };
