import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from 'store/User';

import { RoutePath } from '../../routes/RouteConfig/RouteConfig';

export function RequireAuth ({ children }: { children: ReactElement }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate
            to={RoutePath.CURRENCIES}
            state={{ from: location }}
            replace
        />;
    }

    return children;
}
