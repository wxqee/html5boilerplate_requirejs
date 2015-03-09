define({
  load: function (name, req, onload, config) {
    req([ config.baseUrl + 'helpers/loadCSS/loadCSS.js' ], function(){
      loadCSS( name, null, null, function() {
        console.log(name+' is loaded.');
        onload(name);
      } );
    });
  }
});
