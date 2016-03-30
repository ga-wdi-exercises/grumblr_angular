"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction( GrumbleFactory ){
this.grumbles = GrumbleFactory.query();
  }
}());
