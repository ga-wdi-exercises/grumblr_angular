"use strict";

(function() {
  angular
    .module("grumbles")
    .controller("GrumbleEditController", [
      "GrumbleFactory",
      "$stateParams",
      "$state",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction(GrumbleFactory, $stateParams, $state) {
    this.grumble = GrumbleFactory.get({ id: $stateParams.id });
    this.update = function() {
      this.grumble.$update({ id: $stateParams.id });
      $state.go("grumbleShow", { id: $stateParams.id });
    }
    this.destroy = function(){
      this.grumble.$delete({ id: $stateParams.id });
      $state.go("grumbleIndex");
    }
  }
}());