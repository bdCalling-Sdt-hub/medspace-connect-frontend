import { jwtDecode } from 'jwt-decode';

export function decodedUser(token: string) {
      if (!token) {
            throw new Error('Token is required');
      }

      const user = jwtDecode(token);

      return user;
}
