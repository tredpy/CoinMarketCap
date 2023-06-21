import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
    addNewCommentActions,
    addNewCommentReducer,
    getAddNewCommentText
} from 'store/AddNewComment';

import { DynamicModuleLoader, ReducersList } from 'utils/DynamicModuleLoader/DynamicModuleLoader';

import { classNames } from 'helpers/classNames/classNames';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';

import { Input } from 'ui/Input/Input';
import { Button } from 'ui/Button/Button';

import { useTranslation } from 'react-i18next';

import s from './AddNewCommentForm.module.scss';

export interface AddNewCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer
}

export const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(s.AddCommentForm, {}, [className])}>
                <Input
                    className={s.input}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                />
                <Button
                    view={'border'}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
