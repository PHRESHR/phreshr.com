import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

const moduleFileExtensions = [ 'mjs', 'js', 'jsx', 'ts', 'tsx', 'json' ];

export default {
	resolveApp: (relativePath: string) => path.resolve(appDirectory, relativePath),
	resolveModule: (resolveFn: (filepath: string) => string, filePath: string) => {
		const extension = moduleFileExtensions.find((ext) => fs.existsSync(resolveFn(`${filePath}.${ext}`)));

		if (extension) {
			return resolveFn(`${filePath}.${extension}`);
		}

		return resolveFn(`${filePath}.js`);
	}
};
