import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack/webpack.config.babel';
import { paths, publicPath, protocol, host, port } from '../webpack/helpers';

const compiler = webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
	stats: {
		colors: true
	}
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, () => {
	console.log(`Starting the development server on port: ${port}`);
});
