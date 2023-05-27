import { screen } from '@testing-library/react';
import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
    test('Render test', () => {
        componentRender(<LangSwitcher/>);
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });
});
