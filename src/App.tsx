import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInitiated, userActions } from 'store/User';

import { useAppDispatch } from 'common/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from 'common/hooks/useTheme/useTheme';
import { classNames } from 'common/helpers/classNames/classNames';
import { AppRouter } from 'common/routes/AppRouter/AppRouter';

import { PageLoader } from 'components/PageLoader/PageLoader';
import { SideBar } from 'components/SideBar/SideBar';
import { Header } from 'components/Header/Header';

import 'common/assets/styles/index.scss';

export const App = memo(() => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();
    const initiated = useSelector(getUserInitiated);

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
                    {initiated && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
});
