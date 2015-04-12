module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					captureFile: 'results.txt', // Optionally capture the reporter output to a file
					quiet: false, // Optionally suppress output to standard out (defaults to false)
					clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
				},
				src: ['test/**/*.js']
			}
		},
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

	grunt.registerTask('Run-tests', ['mochaTest']);
	grunt.registerTask('OpenShift-TestDeploy', ['openshift_tst_deploy']);
	grunt.registerTask('Github-push', ['github_push']);
	grunt.registerTask('Compile-less', ['less']);
};
