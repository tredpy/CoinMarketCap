import { lazy } from 'react';

export const CurrencyDetailsPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CurrencyDetailsPage')), 1500);
}));
