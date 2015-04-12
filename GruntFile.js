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
		openshift_tst_deploy: {
			openshift: {
				options: {
					verbose: true,
					branch: 'test',
					remote: 'openshift-tst'
				}
			}
		},
		github_push: {
			github: {
				options: {
					verbose: true,
					branch: 'master',
					remote: 'GitHub'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-git');

	grunt.registerTask('openshiftTestDeploy', ['openshift_tst_deploy']);
	grunt.registerTask('githubPush', ['github_push']);
	grunt.registerTask('default', ['less']);
};
