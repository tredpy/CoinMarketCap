import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { PortfolioPage } from 'pages/PortfolioPage';
import { WatchlistPage } from 'pages/WatchlistPage';

export type AppRoutes = 'main' | 'profile' | 'portfolio' | 'watchlist'
export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    profile: '/profile',
    portfolio: '/portfolio',
    watchlist: 'watchlist'
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />
    },
    profile: {
        path: RoutePath.profile,
        element: <ProfilePage />
    },
    portfolio: {
        path: RoutePath.portfolio,
        element: <PortfolioPage />
    },
    watchlist: {
        path: RoutePath.watchlist,
        element: <WatchlistPage />
    }
};
