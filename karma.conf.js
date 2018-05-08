module.exports = function(config) {
  config.set({    
    frameworks: ['jasmine'],

    files: [      
      'lib/angular/angular.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-mocks/angular-mocks.js',
      'src/*.js',

      'test/*.spec.js'
    ],

    plugins: [
      'karma-chrome-launcher',      
      'karma-jasmine',
      'karma-requirejs'  
  ],

  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera (has to be installed with `npm install karma-opera-launcher`)
  // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
  // - PhantomJS
  // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
  browsers: ['ChromeHeadless'],

  customLaunchers: {
      Chrome_with_debugging: {
          base: 'Chrome',
          flags: ['--remote-debugging-port=9222', '--user-data-dir=%TEMP%'],
          debug: true
      }
  },
  })
}