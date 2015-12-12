module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            /**
             * Browserify http://browserify.org/ handles commonjs
             * modules resolves imports, exports, dependencies and
             * generates a single output files from a set of modules
             */
            dist: {
                options: {
                    transform: [
                        /**
                         * Using babelify https://github.com/babel/babelify
                         * as transform to handle EcmaScript6 syntax. Babelify is
                         * a browserify wrapper for Babel https://babeljs.io/ javascript
                         * compiler (transpiler) which handles different js syntaxes
                         * i.e ES6, TypeScript, JSX etc..
                         */
                        ["babelify", {
                            presets: ["es2015"]
                        }]
                    ]
                },
                files: {
                    "./dist/app.js": ["./src/**/*.es6"]
                }
            }
        },
        watch: {
            /**
             * Simple watcher, run 'grunt watch' from commandline
             * every time you change the files in src folder
             * browserify will regenerate output files.
             *
             */
            scripts: {
                files: ["./src/**/*.es6"],
                tasks: ["browserify"]
            }
        },
        serve: {
            /**
             * Serving root directory at http://localhost:8088
             */
            options: {
                port: 8088
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};