/*Smart Phone

This class inherits from the Phone class, Tablet class, Game Console class, and the Web Browser class.

The constructor should accept a single argument phoneNumber and invoke the Phone class constructor passing in phoneNumber, and invoke the Game Console class constructor with the hard coded constructor argument 'Smart Phone'*/
var Phone = require("./Phone.js");
var Watch = require("./Watch.js");
var Tablet = require("./Tablet.js");
var GameConsole = require("./GameConsole.js");
var WebBrowser = require("./WebBrowser.js");


function SmartPhone(phoneNumber){
Phone.call(this,phoneNumber);
Watch.call(this);
Tablet.call(this);
GameConsole.call(this,"Smart Phone");
WebBrowser.call(this);
}

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

//extend excutes prototype
extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Watch.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);



module.exports = SmartPhone;