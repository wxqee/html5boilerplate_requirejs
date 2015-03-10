
require([ 'require-config' ], function() {

require([
  'i18n!nls/main',
  'modernizr',
  'plugins',
  'loadCSS!css/normalize.css',
  'loadCSS!css/main.css',
], function( main ){
  var apps, target, htmls;
  apps = [
    { name: "todo", subject: "TodoMVC" }
  ];

  htmls = [ "<h1>"+ main.hi +". "+ main.whoami +"</h1>" ]
  htmls.push( '<h3>'+ main.appList +'</h3>' );
  htmls.push( "<ul>" );
  apps.forEach(function( app, i ){
    htmls.push( '<li><a href="'+ app.name +'.html" target="_blank">'+ app.subject +'</li>' );
  });
  htmls.push( "</ul>" );

  target = document.querySelectorAll("body")[0];
  target.innerHTML = htmls.join( "" );
});

});  // require-config.js
