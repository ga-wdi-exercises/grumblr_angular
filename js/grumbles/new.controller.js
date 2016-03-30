"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("NewController", [
    "GrumbleFactory",
    NewController
  ]);
  function NewController(GrumbleFactory){
    this.grumble = new GrumbleFactory();
    this.create = function(){
      this.grumble.$save();
    }
  }
}());
