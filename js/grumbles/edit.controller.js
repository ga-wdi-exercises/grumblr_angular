"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleEditController", [
      "GrumbleFactory",
      "$stateParams",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( GrumbleFactory, $stateParams ){
    this.grumble = GrumbleFactory.get({id: $stateParams.id});
    this.update = function(){
      this.grumble.$update({id: $stateParams.id});
    };
    this.destroy = function(){
      this.grumble.$delete({id: $stateParams.id});
    };
  }
}());
