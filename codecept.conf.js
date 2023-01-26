const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'Test/*loginTest.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      windowSize: "maximize",
      desiredCapabilities: {
        chromeOptions: {
          args: ["--disable-notifications"]
        }
      },
    }
  },
  include: {
    I: './steps_file.js',
    loginPage:'./pages/login.js'
  },
  name: 'amazon_test'
}