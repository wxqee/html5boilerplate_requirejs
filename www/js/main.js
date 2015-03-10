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
  },
  config: {
    i18n: { locale: 'zh-cn' }
  }
});

require([
  'i18n!nls/main',
  'modernizr', 'plugins', 'jquery',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css',
], function( main, $ ){
  var m, p;
  m = main.hi +" "+ main.whoami;
  p = document.querySelectorAll( 'body > p' )[0];
  p.innerHTML = m;
  console.log( m );
});
