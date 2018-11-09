import { devServer } from './webpack/config.dev-server';
import { entry } from './webpack/config.entry';
import { rules } from './webpack/config.module.rules';
import { output } from './webpack/config.output';
import { plugins } from './webpack/config.plugins';
import { optimization } from './webpack/config.optimization';
import { resolve } from './webpack/config.resolve';
import { stats } from './webpack/config.stats';
import { isProd, port } from './webpack/helpers';
import { Configuration } from 'webpack';

const config = {
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
	resolve,
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},
	devServer
};

export default config;
