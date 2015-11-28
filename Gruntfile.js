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
                'docs',
                'test/*.js',
                'test/*.js.map',
                'ClassList.js',
                'ClassList.js.map',
                'ClassListInterface.js',
                'ClassListInterface.js.map'
            ]
        },
        typedoc: {
            main: {
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    out: 'docs/',
                    name: 'Abstract Element.classList realization for any environment.'
                },
                src: [
                    'ClassList.ts',
                    'ClassListInterface.ts'
                ]
            }
        }
    });

    grunt.registerTask('test', ['ts:main', 'mochaTest:main']);

};
