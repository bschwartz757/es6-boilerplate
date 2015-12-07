module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
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
            scripts: {
                files: ["./src/**/*.es6"],
                tasks: ["browserify"]
            }
        },
        serve: {
            options: {
                port: 8080
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-serve');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};