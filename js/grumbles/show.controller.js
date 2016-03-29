"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("showController", [
    "GrumbleFactory",
    "$stateParams",
    ShowFunction
  ])
  function ShowFunction(GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
  }
}());
