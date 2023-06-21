import { memo } from 'react';

import { RoutePath } from 'common/routes/RouteConfig/RouteConfig';

import { AppLink } from 'ui/AppLink/AppLink';

export const Logo = memo(() => {
    return (
        <AppLink
            data-testid="Logo"
            view={'clear'}
            size={'L'}
            to={RoutePath.CURRENCIES}
        >
                CoinMarketCap
        </AppLink>
    );
});
