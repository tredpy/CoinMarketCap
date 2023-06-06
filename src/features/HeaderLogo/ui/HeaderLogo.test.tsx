import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import { HeaderLogo } from './HeaderLogo';

describe('HeaderLogo', () => {
    test('Render test', () => {
        componentRender(<HeaderLogo/>);
        expect(screen.getByTestId('HeaderLogo')).toBeInTheDocument();
    });
});
