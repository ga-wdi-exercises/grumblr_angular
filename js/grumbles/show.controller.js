"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
  }
}());
