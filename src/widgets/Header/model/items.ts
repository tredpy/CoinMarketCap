import { RoutePath } from 'shared/config/routes/routes';

export interface HeaderNavigationType {
    path: string
    title: string
}

export const HeaderNavigationList: HeaderNavigationType[] = [
    {
        path: RoutePath.MAIN,
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
