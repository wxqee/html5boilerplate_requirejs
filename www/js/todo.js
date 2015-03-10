/* file: js/main.js */

/**
 * load js/common.js in each web page is required.
 */
require([ './config' ], function( config ){
  require([ 'todo/main' ]);
});  // js/common.js loader
