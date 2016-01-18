if (process.env.DEV) {
  //pwc
  //xcode build path
  //exports.PWCApp = "/Users/appledev108/Library/Developer/Xcode/DerivedData/client-gkcbblpzvtcvogensmvrxnydjjlr/Build/Products/Debug-iphonesimulator/PwC\ SBS.app"
  //jenkins build path
  exports.PWCApp = "/Users/appledev108/Library/Developer/Xcode/DerivedData/client-fsqhodwugoufyqeobvabzbzunitz/Build/Products/Debug-iphonesimulator/Pwc\ SBS.app";

  //samples
  exports.iosTestApp = "sample-code/apps/TestApp/build/release-iphonesimulator/TestApp.app";
  exports.iosWebviewApp = "sample-code/apps/WebViewApp/build/release-iphonesimulator/WebViewApp.app";
  exports.iosUICatalogApp = "sample-code/apps/UICatalog/build/release-iphonesimulator/UICatalog.app";
  exports.androidApiDemos = "sample-code/apps/ApiDemos/bin/ApiDemos-debug.apk";
  exports.selendroidTestApp = "sample-code/apps/selendroid-test-app.apk";
  } else {
  //pwc
  //xcode build path
  //exports.PWCApp = "/Users/appledev108/Library/Developer/Xcode/DerivedData/client-gkcbblpzvtcvogensmvrxnydjjlr/Build/Products/Debug-iphonesimulator/PwC\ SBS.app"
  //jenkins build path
  exports.PWCApp = "/Users/appledev108/Library/Developer/Xcode/DerivedData/client-fsqhodwugoufyqeobvabzbzunitz/Build/Products/Debug-iphonesimulator/Pwc\ SBS.app";

  //samples
  exports.iosTestApp = "http://appium.github.io/appium/assets/TestApp7.1.app.zip";
  exports.iosWebviewApp = "http://appium.github.io/appium/assets/WebViewApp7.1.app.zip";
  exports.iosUICatalogApp = "http://appium.github.io/appium/assets/UICatalog7.1.app.zip";
  exports.androidApiDemos = "http://appium.github.io/appium/assets/ApiDemos-debug.apk";
  exports.selendroidTestApp = "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk";

  exports.iosWebviewAppLocal = "http://localhost:3000/WebViewApp7.1.app.zip";
  exports.androidApiDemosLocal = "http://localhost:3000/ApiDemos-debug.apk";
}
