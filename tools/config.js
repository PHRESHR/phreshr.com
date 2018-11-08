import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

const moduleFileExtensions = [ 'mjs', 'js', 'jsx', 'ts', 'tsx', 'json' ];

export default {
	resolveApp: (relativePath) => path.resolve(appDirectory, relativePath),
	resolveModule: (resolveFn, filePath) => {
		const extension = moduleFileExtensions.find((extension) =>
			fs.existsSync(resolveFn(`${filePath}.${extension}`))
		);

		if (extension) {
			return resolveFn(`${filePath}.${extension}`);
		}

		return resolveFn(`${filePath}.js`);
	}
};
