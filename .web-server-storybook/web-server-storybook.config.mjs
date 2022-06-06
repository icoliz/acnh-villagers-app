import { storybookPlugin } from '@web/dev-server-storybook';

export default {
  plugins: [
    storybookPlugin({
      type: 'web-components',
      configDir: './.web-server-storybook',
    }),
  ],
  open: true,
  nodeResolve: true,
};
