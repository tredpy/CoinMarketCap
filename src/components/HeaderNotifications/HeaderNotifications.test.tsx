import { render, screen } from '@testing-library/react';

import { HeaderNotifications } from './HeaderNotifications';

describe('HeaderNotifications', () => {
    test('Render test', () => {
        render(<HeaderNotifications/>);
        expect(screen.getByTestId('HeaderNotifications')).toBeInTheDocument();
    });
});
