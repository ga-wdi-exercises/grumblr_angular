"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("ShowController", [
    "GrumbleFactory",
    "$stateParams",
    ShowFunction
  ])
  function ShowFunction(GrumbleFactory, $stateParams){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
  }
}());
