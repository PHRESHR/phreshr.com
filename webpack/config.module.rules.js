import { paths, isProd } from './helpers';
const pkg = require('../package.json');

export const rules = [
	{ parser: { requireEnsure: false } },
	{
		test: /\.(js|mjs|jsx)$/,
		enforce: 'pre',
		use: [
			{
				loader: require.resolve('eslint-loader'),
				options: {
					eslintPath: require.resolve('eslint'),
					ignore: true
				}
			}
		],
		include: paths.src
	},
	{
		test: /\.(js|mjs|jsx|ts|tsx)$/,
		include: paths.src,

		loader: require.resolve('babel-loader'),
		options: {
			cacheDirectory: true,
			cacheCompression: !isProd,
			compact: !isProd,
			sourceMaps: false,
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							browsers: pkg.browserslist
						},
						forceAllTransforms: isProd,
						modules: false,
						useBuiltIns: false,
						debug: false
					}
				],
				[ '@babel/preset-react', { development: !isProd } ]
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				...(isProd ? [ '@babel/transform-react-constant-elements' ] : []),
				...(isProd ? [ '@babel/transform-react-inline-elements' ] : [])
			]
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
