import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import vue from 'rollup-plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pkg = JSON.parse(readFileSync(path.join(__dirname, './package.json'), 'utf-8'))
const dependencies = (res) => {
	return Object.keys(res.dependencies || {});
}

const pkgdependencies = dependencies(pkg);

export default {
	external: id => pkgdependencies.includes(id),
	input: 'src/index.js',
	output: [
		{
			file: 'dist/lib/index.js',
			format: 'cjs',
			plugins: [terser()]
		},
		{
			file: 'dist/esm/index.js',
			format: 'es',
			name: 'version',
			plugins: [terser()]
		}
	],
	sourcemap: true,
	plugins: [
		vue({
      style: {
        postcssPlugins: [
          autoprefixer(),
          cssnano()
        ]
      }
    }),
		postcss({
			minimize: true,
			sourceMap: true,
			plugins: [
				autoprefixer({
					overrideBrowserslist: ['last 2 versions']
				}),
				cssnano()
			]
		}),
		nodeResolve({ preferBuiltins: true }),
		json(),
		commonjs(),
	]
};