import { getCounterValue } from './getCounterValue';

import { StateSchema } from '../../../../StoreProvider';

describe('getCounterValue', () => {
    test('Should return current counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
