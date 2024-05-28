import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['.astro', '.eslintrc.cjs', 'src/env.d.ts', '**/*.test.tsx'],
    },
]
