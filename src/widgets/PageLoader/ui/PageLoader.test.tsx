import { screen } from '@testing-library/react';
import {
    renderWithTranslation
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { PageLoader } from './PageLoader';

describe('PageLoader', () => {
    test('Render test', () => {
        renderWithTranslation(<PageLoader/>);
        expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
    });
});
