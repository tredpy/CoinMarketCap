import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('With cls', () => {
        expect(classNames('TEST')).toBe('TEST');
    });

    test('With additional', () => {
        const expected = 'TEST class1 class2';
        expect(classNames(
            'TEST',
            {},
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('With mods', () => {
        const expected = 'TEST class1 class2 hovered scrollable';
        expect(classNames(
            'TEST',
            { hovered: true, scrollable: true },
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('With false mods', () => {
        const expected = 'TEST class1 class2 hovered';
        expect(classNames(
            'TEST',
            { hovered: true, scrollable: false },
            ['class1', 'class2']
        )).toBe(expected);
    });

    test('With undefined mods', () => {
        const expected = 'TEST class1 class2 hovered';
        expect(classNames(
            'TEST',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']
        )).toBe(expected);
    });
});
