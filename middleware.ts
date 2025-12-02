import { NextRequest, NextResponse } from 'next/server';
import { paths } from '@/lib/constants';

export default function middleware(req: NextRequest) {
    const refreshToken = req.cookies.get('refresh_token')?.value;
    const path = req.nextUrl.pathname;

    const publicPaths = [paths.login, paths.signup];

    if (refreshToken && publicPaths.includes(path)) {
        return NextResponse.redirect(new URL(paths.home, req.url));
    }

    if (!refreshToken && !publicPaths.includes(path)) {
        return NextResponse.redirect(new URL(paths.login, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api|images|uploads|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
