import { getUserAuthData } from 'store/User';

import { createSelector } from '@reduxjs/toolkit';

import { RoutePath } from '../RouteConfig/RouteConfig';

export interface NavigationType {
    path: string
    title: string
}

export const getNavigationList = createSelector(
    getUserAuthData,
    (userData) => {
        const NavigationList: NavigationType[] = [
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
            }
        ];

        if (userData) {
            NavigationList.push(
                {
                    path: RoutePath.PROFILE + userData.id,
                    title: 'Профиль'
                }
            );
        }

        return NavigationList;
    }
);
