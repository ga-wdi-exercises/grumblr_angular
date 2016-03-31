"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleShowController", [
      "GrumbleFactory",
      "$stateParams",
      GrumbleShowControllerFunction
    ]);

  function GrumbleShowControllerFunction( GrumbleFactory, $stateParams ){
    this.grumble = GrumbleFactory.query();
  }
}());
