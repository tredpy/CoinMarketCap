import { screen } from '@testing-library/react';
import { AppLink } from './AppLink';
import { componentRender } from '../../lib/testsHelpers/componentRender';

describe('AppLink', () => {
    test('Render test', () => {
        componentRender(<AppLink to={'/'}>TEST</AppLink>);
        expect(screen.getByTestId('AppLink')).toBeInTheDocument();
    });

    test('With text', () => {
        componentRender(<AppLink to={'/'}>TEST</AppLink>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With view primary', () => {
        componentRender(<AppLink to={'/'} view={'primary'}>TEST</AppLink>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
