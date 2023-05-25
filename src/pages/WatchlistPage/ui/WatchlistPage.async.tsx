import { lazy } from 'react';

export const WatchlistPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./WatchlistPage')), 1500);
}));
