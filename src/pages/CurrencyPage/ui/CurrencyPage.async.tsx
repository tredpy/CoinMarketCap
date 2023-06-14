import { lazy } from 'react';

export const CurrencyPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./CurrencyPage')), 1500);
}));
