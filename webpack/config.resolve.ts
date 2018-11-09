import { paths } from './helpers';

export const resolve = {
	extensions: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ],
	alias: {
		'react-native': 'react-native-web'
	},
	modules: [ paths.src, paths.nodeModules ]
};
