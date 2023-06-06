import { useCallback, useState } from 'react';

import { Counter } from 'entities/Counter';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import NotificationDark from 'shared/assets/icons/NotiDark.svg';
import NotificationLight from 'shared/assets/icons/NotiLight.svg';

import s from './HeaderNotification.module.scss'

interface HeaderNotificationProps {
    className?: string
}

export const HeaderNotification = ({ className }: HeaderNotificationProps) => {
    const { theme } = useTheme();

    const [notificationModal, setNotificationModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setNotificationModal((prev) => !prev);
    }, []);

    return (
        <div
            data-testid="HeaderNotification"
            className={classNames('', {}, [className])}
        >
            <Button
                view={'clear'}
                onClick={onToggleModal}
                className={s.btn}
            >
                {theme === 'dark' ? <NotificationLight /> : <NotificationDark />}
            </Button>
            {notificationModal && (
                <Modal
                    lazy
                    isOpen={notificationModal}
                    onClose={onToggleModal}>
                    <Counter/>
                </Modal>
            )}
        </div>
    );
};
