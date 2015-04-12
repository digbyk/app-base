module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"./public/css/main.css": ["./public/less/bootstrap.less", "./public/less/main.less"] // destination file and source file
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
		},
		gitpush: {
			openShift: {
				options: {
					branch: 'test',
					remote: 'openshift'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-git');

	grunt.registerTask('pushOpenshift', ['gitpush']);
	grunt.registerTask('default', ['less']);
};
