import { useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface CurrencySwitcherProps {
    className?: string
}
export const CurrencySwitcher = ({ className }: CurrencySwitcherProps) => {
    const [currency, setCurrency] = useState(false);

    const onToggleCurrency = useCallback(() => {
        setCurrency((prev) => !prev);
    }, []);

    return (
        <Button
            data-testid="CurrencySwitcher"
            className={classNames('', {}, [className])}
            view={'clear'}
            size={'M'}
            onClick={onToggleCurrency}
        >
            {currency ? 'RUB' : 'USD'}
        </Button>
    );
};
