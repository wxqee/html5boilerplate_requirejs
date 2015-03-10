/* file: js/common.js */
requirejs.config({
  baseUrl: 'js/vendor',
  paths: {
    app: "../app",
    todo: "../todo"
  },
  config: {
    "i18n": { locale: "zh-cn" }
  },
});
