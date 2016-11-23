
Kata Idukay - Cuestionarix
===================

General installation instructions:

Install build essentials:
```
$sudo apt-get install build-essential
```
### Install NODE and NPM

Fastest way is to use apt-get but adding the correct sources:

```
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
It may be important to update npm:
```
$ npm install npm@2 -g
```

### For Tests

For running tests, we will use GRUNT (JS task runner) so we need to install it globally:
```
$ sudo npm install -g grunt-cli
```

### Dependencies

In order to install dependencies and other external required modules, cd into each **server** and **client** folders and run:
```
$ npm install
```

**Client** uses Bower to keep track of required packages, so we need Bower installed globally as well:
```
$ sudo npm install -g bower
```

Now cd into the client folder and install the bower packages defined in the bower.json file with:
```
$ bower install
```



**Diego 1

C:\Users\Diego\Documents\Github\kata_mines\server>npm install -g grunt-cli
C:\Users\Diego\AppData\Roaming\npm\grunt -> C:\Users\Diego\AppData\Roaming\npm\n
ode_modules\grunt-cli\bin\grunt
grunt-cli@1.2.0 C:\Users\Diego\AppData\Roaming\npm\node_modules\grunt-cli
├── grunt-known-options@1.1.0
├── nopt@3.0.6 (abbrev@1.0.9)
├── resolve@1.1.7
└── findup-sync@0.3.0 (glob@5.0.15)

C:\Users\Diego\Documents\Github\kata_mines\server>npm start

> MinesWeeper-Kata-Server@0.0.1 start C:\Users\Diego\Documents\Github\kata_mines
\server
> node app.js

Express server listening on port 3000




**Diego 2
C:\Users\Diego\Documents\Github\kata_mines\client>grunt -f

=======
Kata Idukay - Cuestionarix
