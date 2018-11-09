import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import chalk from 'chalk';
import fs from 'fs-extra';
import { paths, publicPath, protocol, host, port } from '../webpack/helpers';

function bundle() {
	return new Promise((resolve, reject) => {
		process.env.NODE_ENV === 'production'
			? console.log(chalk.cyan('Creating an optimized production build...'))
			: console.log(chalk.red('Build not optimized for production'));

		const compiler = webpack(webpackConfig as any);
		compiler.run((err, stats) => {
			if (err) {
				return reject(err);
			}
			console.info(chalk.green(stats.toString(webpackConfig.stats)));
			if (stats.hasErrors()) {
				return reject(new Error('Webpack compilation errors'));
			}

			return resolve();
		});
	}).then(() => copyPublic());
}

function build() {
	clean().then(() => bundle());
}

build();

async function clean() {
	try {
		await fs.emptyDir(paths.build);
	} catch (err) {
		console.error(err);
	}
}

async function copyPublic() {
	try {
		const exists = await fs.pathExists(paths.build);
		if (exists) {
			await fs.copy(paths.public, paths.build, {
				overwrite: true,
				dereference: true,
				filter: (file) => file !== paths.html
			});
		}
	} catch (err) {
		console.error(err);
	}
}
