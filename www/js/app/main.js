
define(function(require, exports, module) {

  var apps, target, htmls,
      main;

  main = require( 'i18n!app/nls/main' );

  apps = [
    { name: "todo", subject: "TodoMVC" }
  ];

  htmls = [ "<h1>"+ main.helloworld +"</h1>" ]
  htmls.push( '<h3>'+ main.appList +'</h3>' );
  htmls.push( "<ul>" );
  apps.forEach(function( app, i ){
    htmls.push( '<li><a href="'+ app.name +'.html" target="_blank">'+ app.subject +'</li>' );
  });
  htmls.push( "</ul>" );

  target = document.querySelectorAll("body")[0];
  target.innerHTML = htmls.join( "" );

});
