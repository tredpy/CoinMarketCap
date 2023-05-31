export type AppRoutes = 'MAIN' | 'PROFILE' | 'PORTFOLIO' | 'WATCHLIST' | 'LOGIN' | 'NOT_FOUND'
export const RoutePath: Record<AppRoutes, string> = {
    MAIN: '/',
    PROFILE: '/profile',
    PORTFOLIO: '/portfolio',
    WATCHLIST: '/watchlist',
    LOGIN: '/login',
    NOT_FOUND: '*'
};
