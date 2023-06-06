import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import { HeaderNavigation } from './HeaderNavigation';

describe('HeaderNavigation', () => {
    test('Render test', () => {
        componentRender(<HeaderNavigation/>);
        expect(screen.getByTestId('HeaderNavigation')).toBeInTheDocument();
    });
});
