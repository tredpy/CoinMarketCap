module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:storybook/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        indent: ['error', 4],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'n/handle-callback-err': 'off'
    }
};
