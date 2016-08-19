"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleShowControllerFunction //This is a stylistic decision - we could have passed in an anonymous function to .controller if we wanted to
  ]);

  function GrumbleShowControllerFunction(GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
  }
}());
