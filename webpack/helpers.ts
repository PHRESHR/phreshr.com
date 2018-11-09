import config from './config';

export const isProd = process.env.NODE_ENV === 'production';
export const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
export const host = process.env.HOST || '0.0.0.0';
export const port = process.env.PORT || '1301';

export const paths = {
	root: config.resolveApp('.'),
	src: config.resolveApp('src'),
	srcGlob: config.resolveApp('src/**/*.{ts,tsx}'),
	build: config.resolveApp('build'),
	public: config.resolveApp('public'),
	html: config.resolveApp('public/index.html'),
	serviceWorker: config.resolveApp('src/serviceWorker.ts'),
	entry: config.resolveModule(config.resolveApp, 'src/index'),
	tsConfig: config.resolveApp('tsconfig.json'),
	pkg: config.resolveApp('package.json'),
	nodeModules: config.resolveApp('node_modules')
};

export const publicPath = '/';
