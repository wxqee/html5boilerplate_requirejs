
/**
 * Adapter to TodoMVC app without change codes
 **/
requirejs.config({
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
    jquery: "http://www.cdnjs.net/ajax/libs/jquery/1.11.2/jquery.min",
    backbone: "http://www.cdnjs.net/ajax/libs/backbone.js/1.1.2/backbone-min",
    underscore: "http://www.cdnjs.net/ajax/libs/underscore.js/1.8.2/underscore-min",
    backboneLocalstorage: "http://www.cdnjs.net/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min",
    routers: "../todo/routers",
    views: "../todo/views",
    collections: "../todo/collections",
    models: "../todo/models",
    templates: "../todo/templates",
    common: "../todo/common"
  }
});

define(function( require, exports, module ){

  require([
    'backbone',
    'views/app',
    'routers/router',
    'css!todo/css/todo.css',
  ], function(Backbone, AppView, Workspace){
    new Workspace();
    Backbone.history.start();
  
    new AppView();
  });

});
