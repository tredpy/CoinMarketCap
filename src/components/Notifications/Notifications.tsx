import { memo, useCallback, useState } from 'react';

import HeaderNotification from 'common/assets/icons/HeaderNotification.svg';
import { classNames } from 'common/helpers/classNames/classNames';

import { Button } from 'ui/Button/Button';
import { Modal } from 'ui/Modal/Modal';

import s from './Notifications.module.scss'

interface NotificationsProps {
    className?: string
}

export const Notifications = memo(({ className }: NotificationsProps) => {
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
                <HeaderNotification className={s.icon}/>
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
