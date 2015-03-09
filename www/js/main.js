requirejs.config({
  baseUrl: 'js',
  shim: {
    jquery: {
      exports: 'jQuery'
    },
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
    modernizr: 'vendor/modernizr-2.8.3.min',
    jquery: 'vendor/jquery-1.11.2.min',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone-min',
    backboneLocalstorage: 'vendor/backbone.localStorage-min',
    text: 'vendor/text'
  },
  map: {
    '*': {
      'loadCSS': 'helpers/loadCSS/wrapper'
    }
  },
  config: {
    i18n: { locale: 'zh-cn' }
  }
});

require([
  'i18n!nls/main',
  'backbone',
  'views/app',
  'routers/router',
  'modernizr',
  'plugins',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css',
  'loadCSS!css/todo.css',
], function(main, Backbone, AppView, Workspace){
  new Workspace();
  Backbone.history.start();

  new AppView();
});
