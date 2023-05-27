import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('With view clear', () => {
        render(<Button view={'clear'}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });

    test('With view border', () => {
        render(<Button view={'border'}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('border');
        screen.debug();
    });

    test('With view background', () => {
        render(<Button view={'background'}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('background');
        screen.debug();
    });
});
