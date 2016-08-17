"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    "$firebaseArray",
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction($firebaseArray){
    var vm = this;
    var ref = firebase.database().ref().child("grumbles");
    vm.grumbles = $firebaseArray(ref);

    vm.create = function(){
      vm.grumbles.$add(vm.newGrumble).then(function(){
        vm.grumble = {};
      });
    }

    vm.delete = function(grumble){
      vm.grumbles.$remove(grumble)
    }

  }
}());
