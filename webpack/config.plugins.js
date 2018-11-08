import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import WebpackBar from 'webpackbar';

import { paths, publicPath, isProd } from './helpers';

const commonPlugins = [
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
		publicPath: publicPath
	}),
	new WebpackBar()
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
