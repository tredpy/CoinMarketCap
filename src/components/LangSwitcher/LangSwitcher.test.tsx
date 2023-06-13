import { screen } from '@testing-library/react';

import { componentRender } from 'tests/componentRender/componentRender';

import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('Render test', () => {
        componentRender(<LangSwitcher/>);
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });
});
