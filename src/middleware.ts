import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodedUser } from './utils/decodeUser';

export function middleware(request: NextRequest) {
      const token = cookies().get('accessToken')?.value;

      if (!token) {
            return NextResponse.redirect(new URL('/', request.url));
      }

      try {
            const user = decodedUser(token);

            // Check if the user's role is 'SPACEPROVIDER'

            // Proceed to next middleware or requested page if the role is correct
            return NextResponse.next();
      } catch (error) {
            console.error('Error decoding token:', error);
            return NextResponse.redirect(new URL('/', request.url));
      }
}

export const config = {
      matcher: ['/profile/:path*'],
};
