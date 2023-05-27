import { screen } from '@testing-library/react';
import {
    componentRender
} from 'shared/lib/testsHelpers/componentRender';
import { ErrorThrower } from './ErrorThrower';

describe('ErrorThrower', () => {
    test('Render test', () => {
        componentRender(<ErrorThrower/>);
        expect(screen.getByTestId('ErrorThrower')).toBeInTheDocument();
    });
});
