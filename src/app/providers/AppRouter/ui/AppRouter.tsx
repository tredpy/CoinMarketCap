import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../lib/routeConfig';

import { PageLoader } from 'widgets/PageLoader';

const AppRouter = memo(() => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
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

export default AppRouter;
