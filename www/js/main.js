requirejs.config({
  baseUrl: 'js',
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    backboneLocalstorage: {
      deps: [ 'backbone' ],
      exports: 'Store'
    }
  },
  paths: {
    jquery: 'vendor/jquery-1.11.2.min',
    modernizr: 'vendor/modernizr-2.8.3.min',
    underscore: 'http://underscorejs.org/underscore-min',
    backbone: 'http://backbonejs.org/backbone-min',
    backboneLocalstorage: 'https://raw.githubusercontent.com/jeromegn/Backbone.localStorage/master/backbone.localStorage-min'
  },
  map: {
    '*': {
      'loadCSS': 'helpers/loadCSS/wrapper'
    }
  }
});

require([
  'modernizr', 'plugins', 'backbone',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css'
], function(){
  console.log( 'Hello, world' );
});
