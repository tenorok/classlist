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
                '.tscache',
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

};
