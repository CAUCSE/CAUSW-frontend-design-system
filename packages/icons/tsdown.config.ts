import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts', './src/mono/index.ts', './src/colored/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  unbundle: true,
});
