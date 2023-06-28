import { getQueryParams } from './addQueryParams';

describe('addQueryParams tests', () => {
    test('Test With One Param', () => {
        const params = getQueryParams({
            test: 'value'
        });
        expect(params).toBe('?test=value');
    });
    test('Test With Multiple Params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2'
        });
        expect(params).toBe('?test=value&second=2');
    });
    test('Test With Undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined
        });
        expect(params).toBe('?test=value');
    });
});
