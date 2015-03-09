requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-1.11.2.min',
    modernizr: 'vendor/modernizr-2.8.3.min'
  },
  map: {
    '*': {
      'loadCSS': 'helpers/loadCSS/wrapper'
    }
  }
});

require([
  'modernizr', 'plugins', 'jquery',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css'
], function(){
  console.log( 'Hello, world' );
});
