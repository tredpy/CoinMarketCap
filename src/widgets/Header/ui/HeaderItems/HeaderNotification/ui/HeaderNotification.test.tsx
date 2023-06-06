import { render, screen } from '@testing-library/react';

import { HeaderNotification } from './HeaderNotification';

describe('HeaderNotification', () => {
    test('Render test', () => {
        render(<HeaderNotification/>);
        expect(screen.getByTestId('HeaderNotification')).toBeInTheDocument();
    });
});
