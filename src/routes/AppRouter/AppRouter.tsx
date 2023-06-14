import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps, RouteConfig } from '../RouteConfig/RouteConfig';
import { RequireAuth } from '../RequireAuth/RequireAuth';

import { PageLoader } from 'components/PageLoader/PageLoader';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className='content'>
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element=
                    {route.authOnly
                        ? <RequireAuth>{element}</RequireAuth>
                        : element
                    }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
})
