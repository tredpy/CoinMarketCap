import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export const HeaderLogo = () => {
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
};
