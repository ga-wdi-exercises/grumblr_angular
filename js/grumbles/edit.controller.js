"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("EditController", [
    "GrumbleFactory",
    "$stateParams",
    EditControllerFunction
  ]);
  function EditControllerFunction(GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id});
    }
  }
}());
