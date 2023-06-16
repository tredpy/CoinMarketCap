import webpack from 'webpack';

import { BuildOptions } from './types/config';

import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const cssLoader = buildCssLoader(isDev);
    const typescriptLoader = buildTypescriptLoader();

    return [
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
