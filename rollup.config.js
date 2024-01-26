import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'
import pkg from './package.json' assert { type: 'json' };
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const moduleName = pkg.name.replace(/^@.*\//, '');
const inputFileName = 'src/app.ts';
const author = pkg.author;
const banner = `
/**
  * @license
  * ${moduleName}.js v${pkg.version}
  * Author: ${author}
  * ${new Date()}
  * Released under the ${pkg.license} license.
  */
`;

export default [

  // IIFE
  {
    input: inputFileName,
    output: [
      {
        name: moduleName,
        file: 'dist/public/digipad.js',
        format: 'iife',
        watch: true,
        sourcemap: true,
        banner,
      },
      {
        name: moduleName,
        file: 'dist/public/digipad.js'.replace('.js', '.min.js'),
        format: 'iife',
        watch: false,
        sourcemap: false,
        banner,
        plugins: [terser()],
      },
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      babel({
        babelHelpers: 'bundled',
        configFile: resolve(__dirname, '.babelrc.js'),
      }),
      pluginNodeResolve({
        browser: true,
      }),
      copy({
        targets: [
          {
            src: [
              'src/assets/index.html',
              'src/assets/favicon.svg'
            ],
            dest: 'dist/public'
          },
          // { src: ['assets/fonts/arial.woff', 'assets/fonts/arial.woff2'], dest: 'dist/public/fonts' },
          // { src: 'assets/images/**/*', dest: 'dist/public/images' }
        ]
      })
    ],
  },

  // ESM
  // {
  //   input: inputFileName,
  //   output: [
  //     {
  //       file: 'dist/digipad.esm.js',
  //       format: 'es',
  //       sourcemap: true,
  //       banner,
  //       exports: 'named',
  //     },
  //   ],
  //   external: [
  //     ...Object.keys(pkg.dependencies || {}),
  //     ...Object.keys(pkg.devDependencies || {}),
  //   ],
  //   plugins: [
  //     pluginTypescript(),
  //     pluginCommonjs({
  //       extensions: ['.js', '.ts'],
  //     }),
  //     babel({
  //       babelHelpers: 'bundled',
  //       configFile: resolve(__dirname, '.babelrc.js'),
  //     }),
  //     pluginNodeResolve({
  //       browser: false,
  //     }),
  //   ],
  // },

  // UMD
  // {
  //   input: inputFileName,
  //   output: [
  //     {
  //       name: moduleName,
  //       file: 'dist/digipad.umd.js',
  //       format: 'umd',
  //       sourcemap: true,
  //       banner,
  //       exports: 'default'
  //     },
  //   ],
  //   external: [
  //     ...Object.keys(pkg.dependencies || {}),
  //     ...Object.keys(pkg.devDependencies || {}),
  //   ],
  //   plugins: [
  //     pluginTypescript(),
  //     pluginCommonjs({
  //       extensions: ['.js', '.ts'],
  //     }),
  //     babel({
  //       babelHelpers: 'bundled',
  //       configFile: resolve(__dirname, '.babelrc.js'),
  //     }),
  //     pluginNodeResolve({
  //       browser: false,
  //     }),
  //   ],
  // }

];