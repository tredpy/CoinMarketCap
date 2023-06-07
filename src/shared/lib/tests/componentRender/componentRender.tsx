import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';

import { render } from '@testing-library/react';

import i18nForTests from '../../../config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

interface componentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
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
