import { lazy } from 'react';

export const PortfolioPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./PortfolioPage')), 1500);
}));
