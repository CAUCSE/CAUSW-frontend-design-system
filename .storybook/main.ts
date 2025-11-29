import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../packages/components/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/components/src/**/*.stories.mdx',
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("storybook-addon-test-codegen")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
