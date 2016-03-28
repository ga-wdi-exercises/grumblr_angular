"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleEditController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleEditControllerFunction
  ]);

  function GrumbleEditControllerFunction( GrumbleFactory ){
     this.grumble = update GrumbleFactory();
     this.create = function(){
       this.grumble.$save();
     };
   }
}());
