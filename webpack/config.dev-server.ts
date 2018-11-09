import { paths, publicPath, protocol, host, port } from './helpers';
import { stats } from './config.stats';

export const devServer = {
	compress: true,
	// clientLogLevel: 'none',
	contentBase: paths.public,
	watchContentBase: true,
	hot: true,
	publicPath,
	overlay: false,
	watchOptions: {
		ignored: [ paths.nodeModules ]
	},
	https: protocol === 'https',
	host,
	port: Number(port),
	historyApiFallback: {
		disableDotRule: true
	},
	stats
};
