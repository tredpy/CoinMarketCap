import { RoutePath } from 'shared/config/routes/routes';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';

export const HeaderLogo = () => {
    return (
        <Button
            data-testid="HeaderLogo"
            view={'clear'}
            size={'L'}
        >
            <AppLink
                view={'clear'}
                to={RoutePath.MAIN}
            >
                CoinMarketCap
            </AppLink>
        </Button>
    );
};
