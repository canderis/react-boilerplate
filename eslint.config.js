import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import * as cssPlugin from 'eslint-plugin-css';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintPluginPrettierRecommended,
	cssPlugin.configs['flat/recommended'],
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'warn',
			'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
];
