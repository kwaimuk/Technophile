/*Phone

The constructor should accept a single argument phoneNumber, and set a public variable phoneNumber to the value of that constructor argument.

The class should define a callPhone method that accepts a single argument phoneNumber and return a status message. status message should be in the format: 'this phone number calls other phone number'
example: 5555555 calls 4444444*/

//make a "constructor" out of a function that takes pN
function Phone (phoneNumber){
  this.phoneNumber = phoneNumber;
}

//use prototype to turn Phone into a class and add method aka function into it
Phone.prototype.callPhone = function(telephone){

//return the two variables into a string
return this.phoneNumber +' calls ' +  telephone;
};

//Export the result for others to use
module.exports = Phone;

