/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bustle',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    firebase: {
      apiKey: "AIzaSyCAQaOc7VQpC7xUP1ygZ8LH1W_jk9IMB3M",
      authDomain: "bustle-clone-13e8d.firebaseapp.com",
      databaseURL: "https://bustle-clone-13e8d.firebaseio.com",
      storageBucket: "bustle-clone-13e8d.appspot.com",
      messagingSenderId: "11739613338"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
