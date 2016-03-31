"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleIndexController", [
      "GrumbleFactory",
      GrumbleIndexControllerFunction
    ]);
    // Whenever `.grumbles` is called on our ViewModel, it returns the response from `.query()`
    function GrumbleIndexControllerFunction(GrumbleFactory){
      this.grumbles = GrumbleFactory.query();
    }
}());
