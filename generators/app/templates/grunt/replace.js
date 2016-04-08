'use strict';
module.exports = function(grunt) {
	grunt.config.set('replace', {
		require: {
			src: 'dist/components/templates/*.js',
			overwrite: true,
			replacements: [{
				from: 'react/addons',
				to: 'react'
			}, {
				from: 'lodash',
				to: 'underscore'
			}]
		}
	});
};