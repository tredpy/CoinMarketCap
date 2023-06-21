import { screen } from '@testing-library/react';

import { ComponentRender } from 'common/tests/ComponentRender/ComponentRender';

import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('Render test', () => {
        ComponentRender(<LangSwitcher/>);
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });
});
