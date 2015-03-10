
require([ '../require-config' ], function() {

/**
 * Adapter to TodoMVC app without change codes
 **/
requirejs.config({
  paths: {
    routers: "todo/routers",
    views: "todo/views",
    collections: "todo/collections",
    models: "todo/models",
    templates: "todo/templates",
    common: "todo/common"
  }
});

/**
 * TodoMVC kick-start based on HTML5 Boilerplate
 **/
require([
  'backbone',
  'views/app',
  'routers/router',
  'modernizr',
  'plugins',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css',
  'loadCSS!css/todo.css',
], function(Backbone, AppView, Workspace){
  new Workspace();
  Backbone.history.start();

  new AppView();
});
});  // require-config.js
