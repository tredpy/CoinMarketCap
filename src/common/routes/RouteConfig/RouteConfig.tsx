import { RouteProps } from 'react-router-dom';

import { CurrenciesPage } from 'pages/CurrenciesPage';
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
    | 'CURRENCIES'
    | 'CURRENCY_DETAILS'
    | 'PROFILE'
    | 'USER'
    | 'PORTFOLIO'
    | 'WATCHLIST'
    | 'LOGIN'
    | 'NOT_FOUND'

export const RoutePath: Record<AppRoutes, string> = {
    CURRENCIES: '/',
    CURRENCY_DETAILS: '/currency/', // + :id
    PROFILE: '/profile',
    USER: '/user/', // + :id
    PORTFOLIO: '/portfolio',
    WATCHLIST: '/watchlist',
    LOGIN: '/login',
    NOT_FOUND: '*'
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    CURRENCIES: {
        path: RoutePath.CURRENCIES,
        element: <CurrenciesPage/>
    },
    CURRENCY_DETAILS: {
        path: `${RoutePath.CURRENCY_DETAILS}:id`,
        element: <CurrencyDetailsPage/>
    },
    PROFILE: {
        path: RoutePath.PROFILE,
        element: <ProfilePage/>
    },
    USER: {
        path: `${RoutePath.USER}:id`,
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
