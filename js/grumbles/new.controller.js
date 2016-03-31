"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleNewController", [
      "GrumbleFactory",
      GrumbleNewControllerFunction
    ]);

    function GrumbleNewControllerFunction( GrumbleFactory ){
      
      this.grumble = new GrumbleFactory(); //makes a blank grumble which I can add info too
      this.create = function(){
        this.grumble.$save()
      }
    }
}());
