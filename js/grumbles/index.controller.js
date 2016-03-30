"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(GrumbleFactory){
    var vm = this;
    this.grumbles = GrumbleFactory.query();
    this.newGrumble = new GrumbleFactory();
    this.create = function(){
      vm.newGrumble.$save(function(){
        $state.go('grumbleIndex',{},{reload: true})
      })
    }
  }
}());
