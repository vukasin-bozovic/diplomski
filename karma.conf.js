// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
    config.set({
        frameworks: [
            // Reference: https://github.com/karma-runner/karma-jasmine
            // Set framework to jasmine
            'jasmine'
        ],

        reporters: [
            // Reference: https://github.com/mlex/karma-spec-reporter
            // Set reporter to print detailed results to console
            'progress',

            // Reference: https://github.com/karma-runner/karma-coverage
            // Output code coverage files
            'coverage'
        ],

        files: [
            // Grab all files in the app folder that contain .spec.
            'src/tests.webpack.js'
        ],

        preprocessors: {
            // Reference: http://webpack.github.io/docs/testing.html
            // Reference: https://github.com/webpack/karma-webpack
            // Convert files with webpack and load sourcemaps
            'src/tests.webpack.js': ['webpack', 'sourcemap'],
            'src/app/**/*.html': ['ng-html2js']
        },

        browsers: [
            // Run tests using PhantomJS
            'PhantomJS'
        ],

        singleRun: true,

        // web server port
        port: 5004,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ]
        },

        webpack: require('./webpack.config'),

        // Hide webpack build information from output
        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};
