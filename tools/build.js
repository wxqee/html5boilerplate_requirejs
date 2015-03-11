{
  appDir: '../www',
  baseUrl: 'js/vendor',
  paths: {
    app: '../app',
    todo: '../todo'
  },
  dir: '../www-built',
  modules: [
    {
      name: '../config',
      include: [ 'i18n' ]
    },

    {
        name: '../main',
        include: ['app/main'],
        exclude: ['../config']
    },

    {
        name: '../todo',
        include: [ 'todo/main' ],
        exclude: ['../config']
    }

  ]
}
