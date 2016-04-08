'use strict';
module.exports = function(grunt) {
	grunt.config.set('babel', {
		options: {
			sourceMap: false,
			presets: ['es2015', 'react']
		},
		dist: {
			files: [{
				expand: true,
				cwd: 'src/components/',
				dest: 'dist/components/',
				src: ['**/*.js', '**/*.jsx'],
				ext: ".js"
			}]
		}
	});
};