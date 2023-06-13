import { memo, useCallback, useState } from 'react';

import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from 'hooks/useTheme/useTheme';

import { Button } from 'ui/Button/Button';
import { Modal } from 'ui/Modal/Modal';

import NotificationDark from 'assets/icons/NotiDark.svg';
import NotificationLight from 'assets/icons/NotiLight.svg';

import s from './HeaderNotifications.module.scss'

interface NotificationsProps {
    className?: string
}

export const HeaderNotifications = memo(({ className }: NotificationsProps) => {
    const { theme } = useTheme();

    const [notificationModal, setNotificationModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setNotificationModal((prev) => !prev);
    }, []);

    return (
        <div
            data-testid="HeaderNotifications"
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
                    <Button>YES</Button>
                </Modal>
            )}
        </div>
    );
});
