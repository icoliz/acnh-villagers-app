import { visualRegressionPlugin } from '@web/test-runner-visual-regression/plugin';

export default {
  nodeResolve: true,
  files: ['./src/packages/**/test/*.visual.js'],
  plugins: [
    visualRegressionPlugin({
      update: process.argv.includes('--update-visual-baseline'),
      diffOptions: {
        threshold: 0.2,
        includeAA: false,
      },
    }),
  ],
};
