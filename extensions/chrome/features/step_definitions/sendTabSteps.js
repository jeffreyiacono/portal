var sendTabSteps = function () {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^I am on "([^"]*)"$/, function(url, callback) {
    this.currentTabUrl = url;
    callback();
  });

  this.When(/^I click the Portal icon$/, function(callback) {
    this.visit('file://' + process.cwd() + '/popup.html', callback);
  });

  this.When(/^I pick Jeff$/, function(callback) {
    this.browser.clickLink('Jeff', callback);
  });

  this.When(/^I click send$/, function(callback) {
    this.browser.clickLink('Send', callback);
  });

  this.Then(/^Jeff should see "([^"]*)"$/, function(url, callback) {
    callback.pending();
  });
};

module.exports = sendTabSteps;
