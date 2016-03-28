"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
     "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction(){
    this.grumble = grumbles[$stateParams.id]
  }
}());
