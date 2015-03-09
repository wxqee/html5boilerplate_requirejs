requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-1.11.2.min'
  },
  map: {
    '*': {
      'loadCSS': 'helpers/loadCSS/wrapper'
    }
  }
});

require([
  'jquery', 'plugins',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css'
], function( $ ){
  $(document).ready(function(){
    console.log('Hello, world.');
  });
});
