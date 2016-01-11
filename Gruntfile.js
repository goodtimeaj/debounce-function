module.exports = function(grunt) {
  'use strict'

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false,
        compress: false,
        preserveComments: function(node, comment) {
          return !!comment.value.match(/(license|copyright|MIT)/i)
        }
      },
      all: {
        files: {
          'build/debounce-function.min.js': ['build/debounce-function.js']
        }
      }
    },
    copy: {
      build: {
        expand: true,
        cwd: 'src/',
        src: ['**/*'],
        dest: 'build/'
      },
      dist: {
        expand: true,
        cwd: 'build/',
        src: ['**/*'],
        dest: 'dist/'
      }
    },
    shell: {
      mochaPhantomJS: {
        command: './node_modules/mocha-phantomjs/bin/mocha-phantomjs test/test.html'
      },
      installBowerComponents: {
        command: 'bower install'
      }
    },
    mochaTest: {
      src: {
        options: {
          reporter: 'spec'
        },
        src: ['test/unit/*.js']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-shell')

  grunt.registerTask('install', 'shell:installBowerComponents')

  grunt.registerTask('build', [
    'copy:build',
    'uglify'
  ])

  grunt.registerTask('test', [
    'mochaTest',
    'shell:mochaPhantomJS'
  ])

  grunt.registerTask('dist', [
    'build',
    'test',
    'copy:dist'
  ])

  grunt.registerTask('default', 'build')
}
