import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export const App = () => {
    return <div className={classNames('app', {}, [])}>TEST</div>;
};
