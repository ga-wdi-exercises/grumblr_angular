"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleNewController", [
    "GrumbleFactory",
    GrumbleNewControllerFunction
  ]);

  function GrumbleNewControllerFunction(GrumbleFactory){
    this.grumble = new GrumbleFactory.get();
    this.create = function(){
      this.grumble.$save()
    }
  }
}());
