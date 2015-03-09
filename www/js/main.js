requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'vendor/jquery-1.11.2.min'
  }
});

require([ 'jquery', 'plugins' ], function( $ ){
  $(document).ready(function(){
    console.log('Hello, world.');
  });
});
