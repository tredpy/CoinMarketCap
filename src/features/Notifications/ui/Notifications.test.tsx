import { render, screen } from '@testing-library/react';

import { Notifications } from './Notifications';

describe('Notifications', () => {
    test('Render test', () => {
        render(<Notifications/>);
        expect(screen.getByTestId('Notifications')).toBeInTheDocument();
    });
});
