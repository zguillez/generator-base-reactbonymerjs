'use strict';
module.exports = function(grunt) {
	grunt.config.set('jade', {
		compile: {
			options: {
				client: false,
				pretty: false
			},
			files: [{
				cwd: "src/templates/_",
				src: "*.jade",
				dest: "src/templates/",
				expand: true,
				ext: ".html"
			}, {
				expand: true,
				cwd: "src/components/templates/_",
				dest: "src/components/templates/",
				src: "*.jade",
				ext: ".rt"
			}]
		}
	});
};