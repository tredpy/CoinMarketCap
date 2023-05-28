import { Suspense, useEffect } from 'react';

import { AppRouter } from './providers/AppRouter';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';

import { Header } from 'widgets/Header';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader';

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    useEffect(() => {
        if (Math.random() < 0.3) {
            throw new Error()
        }
    }, [])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader/>}>
                <Header/>
                <div className='wrapper'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
