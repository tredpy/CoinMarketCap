import { memo, useCallback, useState } from 'react';

import { Counter } from 'entities/Counter';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import NotificationDark from 'shared/assets/icons/NotiDark.svg';
import NotificationLight from 'shared/assets/icons/NotiLight.svg';

import s from './Notifications.module.scss'

interface NotificationsProps {
    className?: string
}

export const Notifications = memo(({ className }: NotificationsProps) => {
    const { theme } = useTheme();

    const [notificationModal, setNotificationModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setNotificationModal((prev) => !prev);
    }, []);

    return (
        <div
            data-testid="Notifications"
            className={classNames('', {}, [className])}
        >
            <Button
                view={'clear'}
                onClick={onToggleModal}
                className={s.btn}
            >
                {
                    theme === 'dark'
                        ? <NotificationLight className={s.icon}/>
                        : <NotificationDark className={s.icon}/>
                }
            </Button>
            {notificationModal && (
                <Modal
                    lazy
                    isOpen={notificationModal}
                    onClose={onToggleModal}
                >
                    <Counter/>
                </Modal>
            )}
        </div>
    );
});
