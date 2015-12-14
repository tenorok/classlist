module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('remap-istanbul');

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
        mocha_istanbul: {
            main: {
                src: 'test/*.js',
                options: {
                    reaporter: 'dot',
                    print: 'both',
                    reportFormats: ['json']
                }
            }
        },
        remapIstanbul: {
            main: {
                files: [{
                    src: 'coverage/coverage.json',
                    dest: 'coverage/coverage.json',
                    type: 'json'
                }]
            }
        },
        shell: {
            istanbul: {
                command: './node_modules/.bin/istanbul report lcov text --include coverage/coverage.json'
            }
        },
        clean: {
            main: [
                '.tscache',
                'coverage',
                'docs'
            ].concat([
                'test/*',
                'ClassList',
                'ClassListInterface',
                'CNClassList'
            ].reduce(function(list, item) {
                return list.concat(['.js', '.js.map', '.d.ts'].map(function(ext) {
                    return item + ext;
                }));
            }, []))
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
                    'ClassListInterface.ts',
                    'CNClassList.ts'
                ]
            }
        }
    });

    grunt.registerTask('test', ['ts:main', 'mochaTest:main']);
    grunt.registerTask('coverage', ['ts:main', 'mocha_istanbul:main', 'remapIstanbul:main', 'shell:istanbul']);

};
