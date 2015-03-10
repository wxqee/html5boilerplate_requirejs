
require([ 'require-config' ], function() {

require([
  'jquery',
  'modernizr',
  'plugins',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css',
], function( $ ){
  $('body').html( "<h1>Hello, world. I'm (HTML5 Boilerplate, RequireJS).</h1>" );
});

});  // require-config.js
