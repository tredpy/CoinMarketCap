import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    rootDir: '../../',
    modulePaths: [
        '<rootDir>src'
    ],
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\'
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    },
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts'
    ],
    globals: {
        __IS_DEV__: true,
        __API__: ''
    }
};
