const postcssPresetEnv = require('postcss-preset-env');
const pkg = require('./package.json');

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 2,
			preserve: false,
			browsers: pkg.browserslist,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'custom-selectors': true,
				'color-mod-function': {
					unresolved: 'warn'
				}
			}
		})
	]
};
