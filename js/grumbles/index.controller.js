"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    GrumbleIndexControllerFunction //This is a stylistic decision - we could have passed in an anonymous function to .controller if we wanted to
  ]);

  function GrumbleIndexControllerFunction(GrumbleFactory){
    var vm = this;
    vm.grumbles = GrumbleFactory.query();


    vm.create = function(){
      vm.grumbles.$add(vm.newGrumble).then(function(){
        vm.newGrumble = {};
      });
    }

    vm.delete = function(grumble){
      vm.grumbles.$remove(grumble)
    }
  }
}());
