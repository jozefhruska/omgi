import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: __dirname + `/dist/index.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: __dirname + `/dist/index.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: __dirname + `/dist/index.d.ts`,
      format: 'es',
    },
  }),
];
