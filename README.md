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
cd ROOT
cd www/ && ../bin/www
```


