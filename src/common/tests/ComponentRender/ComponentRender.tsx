import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import i18nForTests from '../i18nForTests/i18nForTests';
import { I18nextProvider } from 'react-i18next';

import { StateSchema } from 'store/Store';

import { StoreProvider } from '../../utils/StoreProvider/StoreProvider';

interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function ComponentRender (component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
