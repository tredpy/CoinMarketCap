import { screen } from '@testing-library/react';

import { Text } from './Text';

import { componentRender } from 'tests/componentRender/componentRender';

describe('Text', () => {
    test('Render test', () => {
        componentRender(<Text/>);
        expect(screen.getByTestId('Text')).toBeInTheDocument();
    });

    test('With text', () => {
        componentRender(<Text text={'TEXT'}/>);
        expect(screen.getByText('TEXT')).toBeInTheDocument();
    });
});
