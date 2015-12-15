"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
    this.grumbles = grumbles;
    this.delete = function(){
      console.log($stateParams.id)
      this.grumbles.slice($stateParams.id, 1);
    }
  }
}());
