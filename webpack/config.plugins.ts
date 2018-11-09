import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import forkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import dotenv from 'dotenv';

import { paths, publicPath, isProd } from './helpers';

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

const commonPlugins = [
	new forkTsCheckerWebpackPlugin({
		async: false,
		checkSyntacticErrors: true,
		tsconfig: paths.tsConfig,
		compilerOptions: {
			module: 'esnext',
			moduleResolution: 'node',
			resolveJsonModule: true,
			isolatedModules: true,
			noEmit: true,
			jsx: 'preserve'
		},
		reportFiles: [ paths.srcGlob, `${!paths.serviceWorker}` ],
		watch: paths.src,
		silent: true
	}),
	new HtmlWebpackPlugin({
		minify: {
			collapseWhitespace: isProd,
			removeComments: isProd,
			removeRedundantAttributes: isProd,
			useShortDoctype: isProd,
			removeEmptyAttributes: isProd,
			removeStyleLinkTypeAttributes: isProd,
			keepClosingSlash: isProd,
			minifyCSS: isProd,
			minifyJS: isProd,
			minifyURLs: isProd
		},
		inject: true,
		template: paths.html
	}),
	new ManifestPlugin({
		fileName: 'asset-manifest.json',
		publicPath
	}),
	new webpack.DefinePlugin(envKeys)
];

const devPlugins = [ new webpack.HotModuleReplacementPlugin() ];

const prodPlugins = [
	new WorkboxWebpackPlugin.GenerateSW({
		clientsClaim: true,
		exclude: [ /\.map$/, /asset-manifest\.json$/ ],
		importWorkboxFrom: 'cdn',
		navigateFallback: '/',
		navigateFallbackBlacklist: [
			// Exclude URLs starting with /_, as they're likely an API call
			new RegExp('^/_'),
			// Exclude URLs containing a dot, as they're likely a resource in
			// public/ and not a SPA route
			new RegExp('/[^/]+\\.[^/]+$')
		]
	})
];

export const plugins = [ ...commonPlugins, ...(isProd ? prodPlugins : devPlugins) ];
