module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        ts: {
            main: {
                tsconfig: true
            }
        },
        mochaTest: {
            main: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/*.js']
            }
        },
        clean: {
            main: [
                'test/*.js',
                'test/*.js.map',
                'classList.js',
                'classList.js.map'
            ]
        }
    });

    grunt.registerTask('test', ['ts:main', 'mochaTest:main']);

};
