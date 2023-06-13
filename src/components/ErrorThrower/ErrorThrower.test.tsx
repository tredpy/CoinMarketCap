import { screen } from '@testing-library/react';

import { componentRender } from 'tests/componentRender/componentRender';

import { ErrorThrower } from './ErrorThrower';

describe('ErrorThrower', () => {
    test('Render test', () => {
        componentRender(<ErrorThrower/>);
        expect(screen.getByTestId('ErrorThrower')).toBeInTheDocument();
    });
});
