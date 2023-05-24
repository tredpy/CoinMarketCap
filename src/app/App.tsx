import { Route, Routes } from 'react-router';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import './styles/index.scss';

export const App = () => {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={'Loading...'}>
                <Link to={'/'}>Main</Link>
                <Link to={'/profile'}>Profile</Link>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
