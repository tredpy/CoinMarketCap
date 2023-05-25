import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { AppRouter } from './providers/AppRouter';
import { Header } from 'widgets/Header';
import { SideBar } from 'widgets/SideBar';
import { PageLoader } from 'widgets/PageLoader';
import { Suspense, useEffect } from 'react';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error()
        }
    }, [])
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader /> }>
                <Header/>
                <div className='wrapper'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};
