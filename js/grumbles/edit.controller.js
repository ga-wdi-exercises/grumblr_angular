"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("EditController", [
    "GrumbleFactory",
    "$stateParams",
    "$state",
    EditControllerFunction
  ]);
  function EditControllerFunction(GrumbleFactory, $stateParams, $state){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    // this.update = function(){
    //   this.grumble.$update({id: $stateParams.id});
    //   $state.go("grumbleIndex");
    // }
    // this.destroy = function(){
    //   this.grumble.$delete({id: $stateParams.id});
    //   $state.go("grumbleIndex");
    // }
  }
}());
