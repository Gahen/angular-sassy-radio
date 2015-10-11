// Generated on 2015-02-07 using generator-angular 0.11.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	var appName = require('./bower.json').name;
	var appFile = appName + '.js';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};

	// Define the configuration for all the tasks
	grunt.initConfig({
		html2js: {
			options: {
				// custom options, see below
			},
			main: {
				src: ['sassy-radio.html'],
				dest: '.tmp/template.js'
			},
		},

		// Project settings
		yeoman: appConfig,
		'auto_install': {
			 local: {}
		},
		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'*.js'
				]
			},
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/{,*/}*',
						'!<%= yeoman.dist %>/.git{,*/}*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// ng-annotate tries to make the code safe for minification automatically
		// by using the Angular long form for dependency injection.
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['../'+appFile],
					dest: './'
				}]
			}
		},

		uglify: {
			options: {
				screwIE8: true
			},
			main: {
				files: {
					'dist/minified.js': 'dist/*.js'
				}
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						appFile,
					]	
				}]
			}
		},

		// Test settings
		karma: {
			unit: {
			configFile: 'test/karma.conf.js',
			singleRun: true
			}
		},

		concat: {
			dist: {
				src: [appFile, '.tmp/template.js'],
				dest: 'dist/'+appFile
			}
		}
	});


	grunt.registerTask('test', [
		'clean:server',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'autoprefixer',
		'html2js',
		'concat',
		'ngAnnotate',
		'uglify',
	]);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);

};
