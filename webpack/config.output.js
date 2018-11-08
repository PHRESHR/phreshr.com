import path from 'path';
import { paths, publicPath, isProd } from './helpers';

export const output = {
	pathinfo: true,
	path: paths.build,
	filename: !isProd ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].js',
	chunkFilename: !isProd ? 'static/js/[name].chunk.js' : 'static/js/[name].[chunkhash:8].chunk.js',
	publicPath: publicPath,
	devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
};
