import { counterReducer, counterActions } from './counterSlice';

import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    test('Decrement value test', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({ value: 9 });
    });
    test('Increment value test', () => {
        const state: CounterSchema = { value: 10 };

        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({ value: 11 });
    });

    test('Should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({ value: 1 });
    });
});
