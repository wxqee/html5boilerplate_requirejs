.PHONY: js coffee clean

JS_FILES = $(patsubst %.coffee, %.js, $(wildcard js/*.coffee))

js: coffee $(JS_FILES)

coffee:
	@which coffee 2>/dev/null || npm install -g coffee-script

%.js: %.coffee
	coffee -bc $^

clean:
	$(RM) $(JS_FILES)
