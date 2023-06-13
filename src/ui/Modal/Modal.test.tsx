import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal', () => {
    test('Render test', () => {
        render(<Modal/>);
        expect(screen.getByTestId('Modal')).toBeInTheDocument();
    });
});
