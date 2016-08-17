"use strict";

(function(){

  angular
    .module( "grumbles" )
    .controller( "GrumbleIndexController", [
      "GrumbleFactory",
      GrumbleIndexControllerFunction
    ]);

    function GrumbleIndexControllerFunction( GrumbleFactory ){
      this.grumbles = GrumbleFactory.query();
    }

}());