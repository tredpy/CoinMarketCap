import { screen } from '@testing-library/react';

import {
    componentRender
} from 'shared/lib/tests/componentRender/componentRender';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
    test('Render test', () => {
        componentRender(<NotFoundPage/>);
        expect(screen.getByTestId('NotFoundPage')).toBeInTheDocument();
    });
});
