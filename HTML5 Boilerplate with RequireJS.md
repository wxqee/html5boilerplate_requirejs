# HTML5 Boilerplate with RequireJS

## Table of contents
[TOC]

## Code base: HTML5 Boilerplate
Download **html5-boilerplate_v5.0.0.zip** from [HTML5 Boilerplate](http://html5boilerplate.com). And put files in your **public** folder.

You will see files:
```bash
user@host:public$ tree
.
├── 404.html
├── apple-touch-icon.png
├── browserconfig.xml
├── crossdomain.xml
├── css
│   ├── main.css
│   └── normalize.css
├── doc
│   ├── css.md
│   ├── extend.md
│   ├── faq.md
│   ├── html.md
│   ├── js.md
│   ├── misc.md
│   ├── TOC.md
│   └── usage.md
├── favicon.ico
├── humans.txt
├── img
├── index.html
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── jquery-1.11.2.min.js
│       └── modernizr-2.8.3.min.js
├── robots.txt
├── tile.png
└── tile-wide.png

5 directories, 24 files
```

### Code Base in Browser
Open your favorite HTML5 browser and access code base. Mine is http://centos.xiaoqiang.loc/.

## + RequireJS
We already have a code base which HTML5 Boilerplate. In the code base, we have only **One** page **index.html** with entrance **js/main.js**. We are using the same code structure to support RequireJS.

Now let's add [require.js](http://requirejs.org) in.

### Install

Download [require.js (v2.1.16)](http://requirejs.org/docs/release/2.1.16/minified/require.js) and locate it besides **js/main.js** as **js/require.js**.

Then change `<script src="js/main.js"></script>` to **`<script src="js/require.js" data-main="js/main"></script>`** in **index.html** web page.

```html
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <!-- <script src="js/main.js"></script> -->
        <script src="js/require.js" data-main="js/main.js"></script>
```

### Configure

For single page support, we just insert **requirejs.config( configs )** in entrance code **js/main.js**.

```javascript
/* file: js/main.js */

/**
 * RequireJS configuration
 **/
requirejs.config({
  baseUrl: 'js'
});

/**
 * Entrance
 **/
require([], function(){
  alert( "Hello, world." );
});
```

In China, before browser **index.html**, think you need to remove Google and Google Ad related codes out of it. This will avoid network pending.

Then browser your [site](http://localhost) and you will get *"Hello, world."* as alert message.

### Multiple pages

When there are more than one web page is going to develop. We need some configures.

* Extract `requirejs.config()`
* More **pageXXXX.html** which based on copy of **index.html**
* Entrance code in **js/pageXXXX** folder as **js/pageXXXX/main.js**. 
	- This appointment helps to identify: which page uses which entrance code and modules belongs to it

#### + js/common.js

Put RequireJS configuration in **js/common.js** file.

```javascript
/* file: js/common.js */
requirejs.config({
  baseUrl: 'js'
});

/****************** SAMPLE ******************
requirejs.config({
  baseUrl: 'js',
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    backboneLocalstorage: {
      deps: [ 'backbone' ],
      exports: 'Store'
    }
  },
  paths: {
    modernizr: 'vendor/modernizr-2.8.3.min',
    jquery: 'vendor/jquery-1.11.2.min',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone-min',
    backboneLocalstorage: 'vendor/backbone.localStorage-min',
    text: 'vendor/text'
  },
  map: {
    '*': {
      'loadCSS': 'helpers/loadCSS/wrapper'
    }
  },
  config: {
    'i18n': { locale: 'zh-cn' }
  }
});
****************** /SAMPLE ******************/
```

#### Update **js/main.js** for index.html
```javascript
/* file: js/main.js */

/**
 * load js/common.js in each web page is required.
 */
require([ 'common' ], function(){

require([], function(){
  alert( "Hello, world." );
});

});  // js/common.js loader
```

#### + page1.html

1. Now create **page1.html** by copying from **index.html**.
	* change `data-main="js/page1/main.js"`
1. Now create **js/page1/main.js** by copying from **js/main.js**.
	* change `require([ '../common' ], ...`

Actually, dependencies or other shared configures in **js/common.js** can work in **pageXXXX.html** well, by loading it before main logic.

## + i18n (RequireJS Plugin)

See [RequireJS i18n bundle API](http://requirejs.org/docs/api.html#i18n) can help more.

### Install
Download [**i18n.js**](https://raw.github.com/requirejs/i18n/latest/i18n.js) and put besides **js/main.js** as **js/i18n.js**.

### Configure
It is suggest that **nls** folder should locate besides page entrance codes, for example **js/nls/**.

### Usage
#### Update **js/main.js**
```javascript
/* file: js/main.js */

/**
 * load js/common.js in each web page is required.
 */
require([ 'common' ], function(){

require([
  'i18n!nls/main'  /* Use ./i18n.js to load `nls/main` locale files */
], function( main){
  alert( main.helloworld );
});

});  // js/common.js loader
```

Then, create the following sample files.
#### + js/nls/main.js
```javascript
/* file: js/nls/main.js */
define({
  "root": {
    "helloworld": "Hello, world."
  },
  "zh-cn": true
});
```

#### + js/nls/zh-cn/main.js
```javascript
/* file: js/nls/zh-cn/main.js */
define({
  "helloworld": "你好，世界。"
});
```

#### Update js/common.js
```
/* file: js/common.js */
requirejs.config({
  baseUrl: 'js',
  config: {
    'i18n': { locale: 'zh-cn' }
  }
});

```

#### Browser Home page
"你好，世界！" will be in alert message as **js/common.js** configures **locale** is **"zh-cn"**.

## Further Read
* [HTML5 Boilerplate](https://html5boilerplate.com/)
	* HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.

* [RequireJS API](http://requirejs.org/docs/api.html)
	* Learn how to configure
	* Learn how to create a Module
	* Learn how to use a Module
	* Learn how to create a Plugin
	* Learn how to use a Plugin

* [A list of plugins](https://github.com/jrburke/requirejs/wiki/Plugins) (RequireJS)

* [TodoMVC - Backbone+RequireJS](https://github.com/tastejs/todomvc/tree/master/examples/backbone_require)
	* After configure with Backbone, you may need this example to learn Backbone with RequireJS.
