module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: [
            'tsconfig.json'
        ]
    },
    plugins: [
        'react',
        'tailwindcss'
    ],
    rules: {
        // Indent with 4 spaces
        'indent': ['error', 4],

        // No semicolon
        'semi': 'off',

        "@typescript-eslint/triple-slash-reference": 'off',

        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
    }
};
