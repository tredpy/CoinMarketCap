import { Suspense, useEffect } from 'react';

import { AppRouter } from './providers/AppRouter';

import { userActions } from 'entities/User';

import { PageLoader } from 'widgets/PageLoader';
import { SideBar } from 'widgets/SideBar';
import { Header } from 'widgets/Header';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (Math.random() < 0.1) {
            throw new Error()
        }
    }, [])

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
