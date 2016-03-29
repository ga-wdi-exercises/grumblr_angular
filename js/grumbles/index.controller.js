"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    GrumbleIndexControllerFunction
  ]);
  function GrumbleIndexControllerFunction(GrumbleFactory){
    // makes index controller get grumbles from grumble factory's api request/response
    this.grumbles = GrumbleFactory.query();
    console.log("im in the controller!");
  }
}());
