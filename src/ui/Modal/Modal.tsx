import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { classNames, Mods } from 'helpers/classNames/classNames';
import { useTheme } from 'hooks/useTheme/useTheme';

import { Portal } from '../Portal/Portal';

import s from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const { theme } = useTheme();

    const [isMounted, setIsMounted] = useState(false);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [s.opened]: isOpen
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                data-testid="Modal"
                className={classNames(s.Modal, mods, [className, theme])}
            >
                <div className={s.overlay} onClick={closeHandler}>
                    <div
                        className={s.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
