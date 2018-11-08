import fs from 'fs-extra';
import config from './config';

async function clean() {
	try {
		await fs.emptyDir(config.resolveApp('dist'));
		console.log('success!');
	} catch (err) {
		console.error(err);
	}
}

clean();
