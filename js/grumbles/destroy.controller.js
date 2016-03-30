"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleDestroyController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleDestroyControllerFunction
  ]);

  function GrumbleDestroyControllerFunction(GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.destroy = function(){
      this.grumble.$destroy({id: $stateParams.id})
    }
  }
}());
