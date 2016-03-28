"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction( GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
  }
}());
