import { lazy } from 'react';

export const LoginPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginPage')), 1500);
}));
