import webpack from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config!.resolve!.modules = [paths.src, 'node_modules']
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.module!.rules = config!.module!.rules!.map((rule: webpack.RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    config!.module!.rules!.push(buildSvgLoader());
    config!.module!.rules!.push(buildCssLoader(true));
    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook')
    }))

    return config;
};
