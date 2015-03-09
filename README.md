# html5boilerplate_requirejs
Use HTML5 Boilerplate and require.js to create project kick-start codes.

## Get HTML5 Boilerplate
```bash
cd ROOT
mkdir www && cd www/
wget https://github.com/h5bp/html5-boilerplate/releases/download/v5.0.0/html5-boilerplate_v5.0.0.zip -O html5-boilerplate_v5.0.0.zip
unzip html5-boilerplate_v5.0.0.zip
rm html5-boilerplate_v5.0.0.zip
```

## Create HTTP Simple server

`bin/www` as Simple HTTP server script in python
```bash
cd ROOT
mkdir bin/
touch bin/www && chmod a+x bin/www
```

edit `vim bin/www` contents
```bash
#!/bin/bash
PORT=`[ x"$(whoami)" == x"root" ] && echo 80 || echo 8000`
export PORT
python -m SimpleHTTPServer $PORT
```

Start HTTP Simple server in `ROOT/www/` folder.
```bash
cd www/
sudo ../bin/www
```

## Get Require JS library
Get require.js from [here](http://requirejs.org/docs/download.html), and put require.js file in `www/js/vendor/` folder.
```bash
cd www/
wget http://requirejs.org/docs/release/2.1.16/minified/require.js -O js/vendor/require.js
```

Open `index.html` and do the changes as below.
```diff
diff --git a/www/index.html b/www/index.html
--- a/www/index.html
+++ b/www/index.html
@@ -13,6 +13,7 @@
         <link rel="stylesheet" href="css/normalize.css">
         <link rel="stylesheet" href="css/main.css">
         <script src="js/vendor/modernizr-2.8.3.min.js"></script>
+        <script src="js/vendor/require.js" data-main="js/main" defer async="true" ></script>
     </head>
     <body>
         <!--[if lt IE 8]>
@@ -22,11 +23,6 @@
         <!-- Add your site or application content here -->
         <p>Hello world! This is HTML5 Boilerplate.</p>

-        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
-        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
-        <script src="js/plugins.js"></script>
-        <script src="js/main.js"></script>
-
         <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
         <script>
             (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
```

meanwhile update `js/main.js` as below contents.
```javascript
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
```

## Use CSS for modules of require.js
Use github project [loadCSS](https://github.com/filamentgroup/loadCSS) here.



