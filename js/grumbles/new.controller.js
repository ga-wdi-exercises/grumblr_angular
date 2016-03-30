"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("NewController", [
    "GrumbleFactory",
    "$state",
    NewController
  ]);
  function NewController(GrumbleFactory, $state){
    this.grumble = new GrumbleFactory();
    this.create = function(){
      this.grumble.$save();
      $state.go("grumbleIndex")
    }
  }
}());
