// import log from 'webpack-log';
import { devServer } from './webpack/config.dev-server';
import { entry } from './webpack/config.entry';
import { rules } from './webpack/config.module.rules';
import { output } from './webpack/config.output';
import { plugins } from './webpack/config.plugins';
import { optimization } from './webpack/config.optimization';
import { stats } from './webpack/config.stats';
import { isProd, port } from './webpack/helpers';

// const logger = log({ name: 'wds' });

// !isProd ? logger.info(`Server Starting on port: ${port}`) : logger.info('Build Process Started');

export default {
	mode: isProd ? 'production' : 'development',
	devtool: !isProd ? 'cheap-module-source-map' : false,
	bail: isProd,
	entry,
	module: {
		strictExportPresence: true,
		rules
	},
	output,
	plugins,
	optimization,
	stats,
	resolve: {
		extensions: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ],
		alias: {
			'react-native': 'react-native-web'
		},
		modules: [ './src', 'node_modules' ]
	},
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	devServer
};
