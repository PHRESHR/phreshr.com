import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config';
import { devServer } from '../webpack/config.dev-server';
import chalk from 'chalk';
import { paths, publicPath, protocol, host, port } from '../webpack/helpers';

const options = {
	...devServer,
	stats: {
		colors: true,
		...devServer.stats
	}
};

webpackDevServer.addDevServerEntrypoints(webpackConfig as any, options);
const compiler = webpack(webpackConfig as any);
const server = new webpackDevServer(compiler, options);

server.listen(Number(port), host, () => {
	console.log(chalk.cyan(`Starting the development server on port: ${port}`));
});
