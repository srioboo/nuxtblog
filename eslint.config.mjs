import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default await createConfigForNuxt().append({
  ignores: [
    '.DS_Store',
    'node_modules/**',
    '.output/**',
    '.nuxt/**',
    'test/**',
    'pages/tags/**',
    'pages/year-archive/**',
    '.env',
    '.env.*',
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
  ],
}).toConfigs();

