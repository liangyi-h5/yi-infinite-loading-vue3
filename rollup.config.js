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
import copy from 'rollup-plugin-copy'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pkg = JSON.parse(readFileSync(path.join(__dirname, './package.json'), 'utf-8'))
const dependencies = (res) => {
	return Object.keys(res.dependencies || {})
}

const pkgdependencies = dependencies(pkg)

const generateBuildPathUrl = (url = '') => {
	switch (process.env.BUILD) {
		case 'test':
			return `demo/node_modules/yi-infinite-loading-vue3/${url}`
		default:
			return `dist/${url}`
	}
}

export default {
	external: id => pkgdependencies.includes(id),
	input: 'src/index.js',
	output: [
		{
			file: generateBuildPathUrl('lib/index.js'),
			format: 'cjs',
			plugins: [terser()]
		},
		{
			file: generateBuildPathUrl('esm/index.js'),
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
			// extract: true,
			minimize: true,
			sourceMap: false,
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
		copy({
			targets: [
        { src: 'src/index.d.ts', dest: generateBuildPathUrl() },
      ]
		})
	]
}