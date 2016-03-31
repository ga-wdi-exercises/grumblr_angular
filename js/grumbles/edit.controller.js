"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleEditController", [
      "GrumbleFactory",
      "$stateParams",
      //"$stateProvider", TODO: Why does this cause errors?
      "$state",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( GrumbleFactory, $stateParams, $state){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id});
      this.goHome();
    }
    this.destroy = function(){
      this.grumble.$delete({id: $stateParams.id});
      this.goHome();
    }
    this.goHome = function(){
      $state.go("grumbleIndex", {}, {reload: true}); // TODO: This will redirect me to the index, but I must manually press reload to see changes. Why?
    }
  }
}());
