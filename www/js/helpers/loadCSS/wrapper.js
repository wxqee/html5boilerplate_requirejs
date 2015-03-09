define({
  load: function (name, req, onload, config) {
    req([ config.baseUrl + 'helpers/loadCSS/loadCSS.js' ], function(){
      loadCSS( name );
    });
  }
});
