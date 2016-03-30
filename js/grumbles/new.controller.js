"use strict"

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleNewController", [
    "GrumbleFactory",
    NewController
  ]);
  function NewController(GrumbleFactory){
    this.grumble = new GrumbleFactory();
    this.create = function(){
      this.grumble.$save();
    }
  }

})
