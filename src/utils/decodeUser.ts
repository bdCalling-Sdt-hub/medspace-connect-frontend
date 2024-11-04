import { jwtDecode, JwtPayload } from 'jwt-decode';

interface CustomJwtPayload extends JwtPayload {
      role?: string;
}

export function decodedUser(token: string): CustomJwtPayload {
      if (!token) {
            throw new Error('Token is required');
      }

      const user = jwtDecode<CustomJwtPayload>(token);

      return user;
}
