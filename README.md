impress scaffolding
===================

This is a scaffolding to simply and quickly utilize [impress.js](https://github.com/bartaz/impress.js) which is a great presentation framework with CSS3.

This scaffolding uses the following libraries and tools.

* [RequireJS](http://requirejs.org/) : Module loader so that slides can be implemented in separated html files and merged
* [jQuery](http://jquery.com/) : Cross-platform library to simply implement JavaScript code
* [Yeoman](http://yeoman.io/) : Scaffolding generator, package manager and code builder


How to use this
---------------

This requires [Node.js](http://nodejs.org/) and [Yeoman](http://yeoman.io/) to be installed first.

Other libraries and tools can be installed with npm and bower.

```
npm install && bower install
```

Files in the app directory can be built into minified and optimized files in the dist directory.

```
grunt build
```

Then you can open dist/index.html with browser to see a [demo](http://eqot.github.io/impress_scaffolding) which is based on [impress.js demo](http://bartaz.github.io/impress.js) and implemented in the app/scripts/slides directory.
