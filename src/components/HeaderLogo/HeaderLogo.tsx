import { memo } from 'react';

import { RoutePath } from 'routes/RouteConfig/RouteConfig';

import { AppLink } from 'ui/AppLink/AppLink';

export const HeaderLogo = memo(() => {
    return (
        <AppLink
            data-testid="HeaderLogo"
            view={'clear'}
            size={'L'}
            to={RoutePath.MAIN}
        >
                CoinMarketCap
        </AppLink>
    );
});
