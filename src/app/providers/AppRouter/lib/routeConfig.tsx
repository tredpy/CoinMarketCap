import { AppRoutes, RoutePath } from 'shared/config/routes/routes';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { PortfolioPage } from 'pages/PortfolioPage';
import { WatchlistPage } from 'pages/WatchlistPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage/>
    }
};
