import { screen } from '@testing-library/react';

import { userEvent } from '@storybook/testing-library';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('Render test', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('Value')).toHaveTextContent('10');
    });

    test('Increment value test', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('IncrementBtn'));
        expect(screen.getByTestId('Value')).toHaveTextContent('11');
    });

    test('Decrement value test', () => {
        componentRender(<Counter/>, {
            initialState: { counter: { value: 10 } }
        });
        userEvent.click(screen.getByTestId('DecrementBtn'));
        expect(screen.getByTestId('Value')).toHaveTextContent('9');
    });
});
