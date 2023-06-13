import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteConfig } from '../RouteConfig/RouteConfig';

import { PageLoader } from 'components/PageLoader/PageLoader';

export const AppRouter = memo(() => (
    <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader/>}>
                        <div className="content">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
));
