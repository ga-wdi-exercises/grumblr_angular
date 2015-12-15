"use strict";
(function(){
  angular
    .module("grumbles")
    .controller("GrumbleIndexController", [
      GrumbleIndexControllerFunction
    ]);
    function GrumbleIndexControllerFunction(){
      console.log("Imin the controller");
      this.grumbles = grumbles;
    }
}());
