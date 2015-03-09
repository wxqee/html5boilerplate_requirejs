After download [loadCSS.js](https://github.com/filamentgroup/loadCSS) here, need to

* exports `loadCSS` function into global
* create `wrapper.js` to it.

```javascript
define({
  load: function (name, req, onload, config) {
    req([ config.baseUrl + 'helpers/loadCSS/loadCSS.js' ], function(){
      loadCSS( name );
    });
  }
});
```
