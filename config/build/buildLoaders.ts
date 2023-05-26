import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const cssLoader = buildCssLoader(isDev);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    return [
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
