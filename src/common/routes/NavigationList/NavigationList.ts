import { RoutePath } from '../RouteConfig/RouteConfig';

export interface NavigationType {
    path: string
    title: string
}

export const NavigationList: NavigationType[] = [
    {
        path: RoutePath.CURRENCIES,
        title: 'Криптовалюты'
    },
    {
        path: RoutePath.PORTFOLIO,
        title: 'Портфель'
    },
    {
        path: RoutePath.WATCHLIST,
        title: 'Избранное'
    },
    {
        path: RoutePath.PROFILE,
        title: 'Профиль'
    }
];
