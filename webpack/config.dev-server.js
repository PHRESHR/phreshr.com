import { paths, publicPath, protocol, host, port } from './helpers';
import { stats } from './config.stats';

export const devServer = {
	contentBase: paths.build,
	compress: true,
	clientLogLevel: 'none',
	contentBase: paths.public,
	watchContentBase: true,
	hot: true,
	publicPath,
	quiet: true,
	overlay: false,
	watchOptions: {
		ignored: [ paths.nodeModules ]
	},
	https: protocol === 'https',
	host,
	port,
	historyApiFallback: {
		disableDotRule: true
	},
	stats: {
		version: false,
		assets: true,
		modules: false,
		...stats
	}
};
