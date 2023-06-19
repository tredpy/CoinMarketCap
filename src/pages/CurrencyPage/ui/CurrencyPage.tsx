import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    currencyCommentReducer,
    getCurrencyComment,
    fetchCommentByCurrencyId,
    getCurrencyCommentIsLoading
} from 'store/Comment';

import { CommentsForm } from 'components/CommentsForm/CommentsForm';

import { DynamicModuleLoader, ReducersList } from 'utils/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'helpers/classNames/classNames';

import { Text } from 'ui/Text/Text';

import { useTranslation } from 'react-i18next';

import s from './CurrencyPage.module.scss';

interface CurrencyPageProps {
    className?: string
}

const reducers: ReducersList = {
    currencyComment: currencyCommentReducer
};

const CurrencyPage = memo((props: CurrencyPageProps) => {
    const { className } = props;
    const { t } = useTranslation('currency');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getCurrencyComment.selectAll);
    const commentsIsLoading = useSelector(getCurrencyCommentIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentByCurrencyId(id));
    });

    if (!id) {
        return (
            <div className={classNames(s.CurrencyPage, {}, [className])}>
                {t('Криптовалюта не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(s.CurrencyPage, {}, [className])}>
                <Text className={s.commentTitle} text={t('Комментарии')} />
                <CommentsForm
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default CurrencyPage;
