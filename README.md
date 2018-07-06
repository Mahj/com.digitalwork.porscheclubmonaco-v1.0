# Ionic Toolkit Firebase
A mobile app integrated with Firebase.

## Dependecies, Run and Build

### Install Ionic CLI
To build and run this app you need to have Ionic CLI installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Install plugins from config.xml
Run `ionic cordova prepare ios` to install all Cordova plugins included in the package.json and add iOS platform to your project.

Run `ionic cordova prepare android` to install all Cordova plugins included in the package.json and add Android platform to your project.

### Run the app
Use `ionic serve -l` to run the app in browser and watch for changes in code

or

use `ionic serve` to just run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform
```bash
$ ionic cordova platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

### Build the app
```bash
$ ionic cordova build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic cordova emulate ios
```

Android:
```bash
$ ionic cordova emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.
* **cordova-plugin-email** - The plugin provides access to the standard interface that manages the editing and sending an email message.
* **cordova-plugin-buildinfo** - This plugin passes application build info (app name, ID, etc) to the OAuth widget.
* **cordova-universal-links-plugin** - This Cordova plugin adds support for opening an application from the browser when user clicks on the link. Better known as Universal Links on iOS and Deep Linking on Android.
* **cordova-plugin-browsertab** - This plugin provides an interface to in-app browser tabs that exist on some mobile platforms. It handles opening secure browser views on iOS/Android mobile devices.
* **cordova-plugin-customurlscheme** - This plugin Launch your app by a Custom URL scheme.
* **cordova-plugin-inappbrowser** - It handles opening a browser view in older versions of iOS and Android.

## Demo
Install [Ionic View](http://view.ionic.io/) and preview the app on your mobile device using the following Ionic View ID: `fc402286`

## Documentation
* [Ionic Toolkit Firebase Quick Start Guide](https://docs.google.com/document/d/1YFb56PphKbcrFTLZZMM3bvZaM6SjmEs3R7VwTqa_t_M/edit?usp=sharing)

## Changelog
```
1.1 - Jun 01, 2018
- Improved style of home screen
- Minor fixes

1.0 - Sep 22, 2017
- Initial release
```

## Credits
* [Ionic Framework](http://ionicframework.com/)
* [Ionic 2.0](http://ionic.io/2)

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)
