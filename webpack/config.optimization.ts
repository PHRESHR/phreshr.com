import TerserPlugin from 'terser-webpack-plugin';
import { isProd } from './helpers';

const prodMinizer = [
	new TerserPlugin({
		terserOptions: {
			parse: {
				ecma: 8
			},
			compress: {
				ecma: 5,
				warnings: false,
				comparisons: false,
				inline: 2
			},
			mangle: {
				safari10: true
			},
			output: {
				ecma: 5,
				comments: false,
				ascii_only: true
			}
		},
		parallel: true,
		cache: true,
		sourceMap: false
	})
];

export const optimization = {
	minimizer: [ ...(isProd ? prodMinizer : []) ],
	splitChunks: {
		chunks: 'all',
		name: false
	},
	runtimeChunk: true
};
