import { paths, isProd } from './helpers';

export const rules = [
	{ parser: { requireEnsure: false } },
	{
		test: /\.(js|mjs|jsx|ts|tsx)$/,
		include: paths.src,

		loader: require.resolve('babel-loader'),
		options: {
			cacheDirectory: true,
			cacheCompression: !isProd,
			compact: !isProd,
			sourceMaps: false
		}
	},
	{
		test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ],
		loader: require.resolve('url-loader'),
		options: {
			limit: 10000,
			name: 'static/media/[name].[hash:8].[ext]'
		}
	},
	{
		exclude: [ /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/ ],
		loader: require.resolve('file-loader'),
		options: {
			limit: 10000,
			name: 'static/media/[name].[hash:8].[ext]'
		}
	}
];
