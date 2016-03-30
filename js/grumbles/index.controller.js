"use strict";

(function(){
  angular
  .module( "grumbles" )
  .controller( "GrumbleIndexController", [
    // The factory is passed in as a dependency to our controller.
    "GrumbleFactory",
    GrumbleIndexControllerFunction
  ]);


  function GrumbleIndexControllerFunction( GrumbleFactory ){
    // When `helloWorld` is called on the controller, it runs the function that we defined in our factory.
    this.grumbles = GrumbleFactory.query();
  }

})();
