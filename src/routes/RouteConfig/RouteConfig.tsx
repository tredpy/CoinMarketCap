import { RouteProps } from 'react-router-dom';

import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { PortfolioPage } from 'pages/PortfolioPage';
import { WatchlistPage } from 'pages/WatchlistPage';
import { ProfilePage } from 'pages/ProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';

type AppRoutes = 'MAIN' | 'PROFILE' | 'PORTFOLIO' | 'WATCHLIST' | 'LOGIN' | 'NOT_FOUND'

export const RoutePath: Record<AppRoutes, string> = {
    MAIN: '/',
    PROFILE: '/profile',
    PORTFOLIO: '/portfolio',
    WATCHLIST: '/watchlist',
    LOGIN: '/login',
    NOT_FOUND: '*'
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    MAIN: {
        path: RoutePath.MAIN,
        element: <MainPage/>
    },
    PROFILE: {
        path: RoutePath.PROFILE,
        element: <ProfilePage/>
    },
    PORTFOLIO: {
        path: RoutePath.PORTFOLIO,
        element: <PortfolioPage/>
    },
    WATCHLIST: {
        path: RoutePath.WATCHLIST,
        element: <WatchlistPage/>
    },
    LOGIN: {
        path: RoutePath.LOGIN,
        element: <LoginPage/>
    },
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage/>
    }
};
