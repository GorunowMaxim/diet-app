import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === '/sign-up' || path === '/sign-in';

	const token = request.cookies.get('token')?.value || '';

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL('/', request.nextUrl));
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL('/sign-in', request.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/', '/dashboard/(.*)', '/sign-in', '/sign-up'],
};
