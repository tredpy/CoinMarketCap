import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div className={s.links}>
                <AppLink view={'primary'} to="/" className={s.profile}>
                    Главная
                </AppLink>
                <AppLink view={'primary'} to="/profile" className={s.profile}>
                    Профиль
                </AppLink>
            </div>
        </div>
    );
};
