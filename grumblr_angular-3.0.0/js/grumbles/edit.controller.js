"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleEditController", [
    "GrumbleFactory",
    GrumbleEditControllerFunction
  ]);

  function GrumbleEditControllerFunction(GrumbleFactory){
    this.create = function(){
      this.grumble.$save()
  }
}());
