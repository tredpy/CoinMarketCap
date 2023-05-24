import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { AppRouter } from './providers/AppRouter';
import { Header } from 'widgets/Header';
import { SideBar } from 'widgets/SideBar';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Header />
            <div className='wrapper'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};
