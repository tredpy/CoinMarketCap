import { render, screen } from '@testing-library/react';

import { Notifications } from './Notifications';

describe('HeaderNotification', () => {
    test('Render test', () => {
        render(<Notifications/>);
        expect(screen.getByTestId('HeaderNotification')).toBeInTheDocument();
    });
});
