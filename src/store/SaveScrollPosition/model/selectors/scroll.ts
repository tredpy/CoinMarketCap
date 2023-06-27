import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '../../../Store';

export const getScroll = (state: StateSchema) => state.scroll.scroll

export const getScrollByPath = createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);
