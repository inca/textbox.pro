'use strict';

var Application = require('circumflex').Application;

var app = module.exports = new Application({

  root: __dirname,

  port: '8123',

  router: require('./router/index'),

  host:  '127.0.0.1:8123',

  staticHost: '127.0.0.1:8123',

  secureHost: '127.0.0.1:8123',

  cookies: {
    secret: 'USE PASSPHRASE TO PROTECT YOUR COOKIES'
  },

  session: {
    ttl: 600,  // session timeout in seconds
    secret: 'USE PASSPHRASE TO PROTECT YOUR SESSIONS'
  },

  redis: {
    host: '127.0.0.1',
    port: '6390'
  },

  development: {

    errorHandler: {
      dumpExceptions: true,
      showStack: true
    },

    loggerOptions: 'dev'

  }

});
