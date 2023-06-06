import { memo } from 'react';

import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';

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
