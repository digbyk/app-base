module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"./public/styles/main.css": ["./public/less/bootstrap.less", "./public/less/main.less"] // destination file and source file
				}
			}
		},
		watch: {
			styles: {
				files: ['./public/less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.registerTask('default', ['less', 'watch']);
};