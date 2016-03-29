"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleNewController", [
      "GrumbleFactory",
      "$stateParams",
      GrumbleNewControllerFunction
    ])

    function GrumbleNewControllerFunction( GrumbleFactory, $stateParams ){
      this.grumble = new GrumbleFactory();
      
    }
}());
