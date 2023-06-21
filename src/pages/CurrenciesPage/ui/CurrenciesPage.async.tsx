import { lazy } from 'react';

export const CurrenciesPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CurrenciesPage')), 1500);
}));
