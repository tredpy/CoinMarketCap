import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutes = 'main' | 'profile'
export const RoutePath: Record<AppRoutes, string> = {
    main: '/',
    profile: '/profile'
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
    main: {
        path: RoutePath.main,
        element: <MainPage />
    },
    profile: {
        path: RoutePath.profile,
        element: <ProfilePage />
    }
};
