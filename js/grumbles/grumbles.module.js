"use strict";
// this new module will only contain information necessary for the grumbles. The other module is for the whole app.

// now this module needs to become a dependent of the main module
// it also needs to be included in the main html page
(function(){
  angular
  .module("grumbles", []); // adding [] defines a new module
  // now this needs to be injected as a dependency to the other module
}());
