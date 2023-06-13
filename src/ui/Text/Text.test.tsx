import { screen } from '@testing-library/react';

import { Text } from './Text';

import { ComponentRender } from 'tests/ComponentRender/ComponentRender';

describe('Text', () => {
    test('Render test', () => {
        ComponentRender(<Text/>);
        expect(screen.getByTestId('Text')).toBeInTheDocument();
    });

    test('With text', () => {
        ComponentRender(<Text text={'TEXT'}/>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });
});
