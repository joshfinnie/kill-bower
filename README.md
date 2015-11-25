# kill-bower
Looking into installing third-party javascript libraries with [Browerify](http://browserify.org/) instead of [Bower](http://bower.io/). I have been a huge fan of using Bower for third-party javascript libraries, even wrote a [blog post](http://engineroom.trackmaven.com/blog/using-bower/), but times are changing. We have run into a lot of issues with Bower lately and with the growth in popularity of Browserify, I thought it might be time to switch.

## Setup
The idea is that you use NPM and Browserify to install and package up your third-party libraries. This is a better practice than using Bower, as it pulls only the javascript files and makes concatination and minification easy.

### third-party-apps.js
The `third-party-apps.js` file is what we use to build our final `vendors.js` file that we can use on our website. To add an app, first install the app through NPM:

```
$ npm install --save <PACKAGE_NAME>
$ npm install --save <TARBALL URL>
```

Then add the file as a requirement to `third-party-apps.js`:

```
...
var packageName = roquire("package-name");
```

Lastly, run `gulp scripts` to generate the latest `vendors.js` file.

## TODOs
I hope there's a smoother process of adding new third-party libraries, the duplication of effort to add them to `package.json` and `src/third-party-apps.js` probably can be streamlined.
