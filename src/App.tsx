import { memo, Suspense, useEffect } from 'react';

import { userActions } from 'store/User';

import { AppRouter } from 'routes/AppRouter/AppRouter';

import { classNames } from 'helpers/classNames/classNames';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useTheme } from 'hooks/useTheme/useTheme';

import { PageLoader } from 'components/PageLoader/PageLoader';
import { SideBar } from 'components/SideBar/SideBar';
import { Header } from 'components/Header/Header';

import 'assets/styles/index.scss';

export const App = memo(() => {
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
});
