var webdriver = require('selenium-webdriver');

var username = process.env.BROWSERSTACK_USERNAME
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY
var browserstackLocal = process.env.BROWSERSTACK_LOCAL
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER
var build1 = process.env.BROWSERSTACK_BUILD

// Input capabilities
var capabilities = {
"browserstack.local": browserstackLocal,
 "browserstack.localIdentifier": browserstackLocalIdentifier,
'os_version' : '12',
'device' : 'iPhone XS Max',
'real_mobile' : 'true',
'browserstack.local' : 'false',
//  "build":"AM_Check1",
"build": build1 + "_AM_Build",
 'browserstack.user' : username,
 'browserstack.key' : accessKey
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://time.is/')
driver.takeScreenshot()
driver.quit()
