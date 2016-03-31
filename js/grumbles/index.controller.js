"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    '$state',
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction($state){
    this.grumbles = grumblesdata;
    this.goToIndex = function(){
      $state.go("grumbleIndex");
    };
  }
})();
