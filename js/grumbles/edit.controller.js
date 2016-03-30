"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleEditController", [
      "GrumbleFactory",
      "$state",
      "$stateParams",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( GrumbleFactory, $state, $stateParams ){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id})
    }
    this.destroy = function(){
      this.grumble.$delete({id: $stateParams.id}).then(function() {
        $state.go("grumbleIndex", {}, {reload: true});
      });
    }
  }
}());
