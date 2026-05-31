import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
  },
  resolve: {
    alias: {
      '@nx-mf-df/contracts-platform-messaging': path.resolve(
        __dirname,
        './src/index.ts',
      ),
    },
  },
});
