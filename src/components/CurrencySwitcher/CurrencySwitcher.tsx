import { memo, useCallback, useState } from 'react';

import { classNames } from 'common/helpers/classNames/classNames';

import { Button } from 'ui/Button/Button';

interface CurrencySwitcherProps {
    className?: string
}

export const CurrencySwitcher = memo(({ className }: CurrencySwitcherProps) => {
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
});
