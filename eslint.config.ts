import { antfu, combine, perfectionist } from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default combine(
  perfectionist(),
  antfu({
    plugins: {
      'readable-tailwind': eslintPluginReadableTailwind,
      tailwindcss,
    },
    rules: {
      ...tailwindcss.configs.recommended.rules,
      'readable-tailwind/multiline': ['warn', { printWidth: 100 }],
      'readable-tailwind/no-unnecessary-whitespace': ['warn'],
    },
  }),
)
