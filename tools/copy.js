import fs from 'fs-extra';
import config from './config';

async function copyPublic() {
	try {
		const exists = await fs.pathExists(config.resolveApp('dist'));
		if (exists) {
			await fs.copy(config.resolveApp('public'), config.resolveApp('dist'), {
				overwrite: true
			});
		}
		console.log('success!');
	} catch (err) {
		console.error(err);
	}
}

async function copyIndex() {
	try {
		const exists = await fs.pathExists(config.resolveApp('dist/index.html'));
		if (exists) {
			await fs.copy(config.resolveApp('./index.html'), config.resolveApp('dist'), {
				overwrite: true
			});
		}
		console.log('success!');
	} catch (err) {
		console.error(err);
	}
}

copyPublic();
// copyIndex()
