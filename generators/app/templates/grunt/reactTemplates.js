'use strict';
module.exports = function(grunt) {
	grunt.config.set('reactTemplates', {
		dist: {
			src: ['src/components/templates/**/*.rt'],
			options: {
				modules: 'amd',
				format: 'stylish'
			}
		}
	});
};