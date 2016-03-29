(function(){
  "use strict";

  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(GrumbleFactory){
    this.grumbles = GrumbleFactory.query();
  }
}());
