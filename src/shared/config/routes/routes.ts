export type AppRoutes = 'MAIN' | 'PROFILE' | 'PORTFOLIO' | 'WATCHLIST' | 'NOT_FOUND'
export const RoutePath: Record<AppRoutes, string> = {
    MAIN: '/',
    PROFILE: '/profile',
    PORTFOLIO: '/portfolio',
    WATCHLIST: '/watchlist',
    NOT_FOUND: '*'
};
