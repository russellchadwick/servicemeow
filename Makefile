all:
	DISPLAY=:0 sudo /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=Source --pack-extension-key=ServiceMeow.pem --user-data-dir=/tmp/foooo
	sudo chown russell.chadwick: Source.crx
	mv Source.crx ServiceMeow.crx
