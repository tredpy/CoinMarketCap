import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { CurrencyDetailsPage } from 'pages/CurrencyDetailsPage';
import { ProfilePage } from 'pages/ProfilePage';
import { PortfolioPage } from 'pages/PortfolioPage';
import { WatchlistPage } from 'pages/WatchlistPage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

type AppRoutes =
    | 'MAIN'
    | 'CURRENCY_DETAILS'
    | 'PROFILE'
    | 'PORTFOLIO'
    | 'WATCHLIST'
    | 'LOGIN'
    | 'NOT_FOUND'

export const RoutePath: Record<AppRoutes, string> = {
    MAIN: '/',
    CURRENCY_DETAILS: '/', // + :id
    PROFILE: '/profile/', // + :id
    PORTFOLIO: '/portfolio',
    WATCHLIST: '/watchlist',
    LOGIN: '/login',
    NOT_FOUND: '*'
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    MAIN: {
        path: RoutePath.MAIN,
        element: <MainPage/>
    },
    CURRENCY_DETAILS: {
        path: `${RoutePath.MAIN}:id`,
        element: <CurrencyDetailsPage/>
    },
    PROFILE: {
        path: `${RoutePath.PROFILE}:id`,
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
