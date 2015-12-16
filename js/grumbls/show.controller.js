"use strict";

(function(){
  angular
  .module("grumbls")
  .controller("GrumblShowController", [
    '$stateParams',
    GrumblShowControllerFunction
  ]);

  function GrumblShowControllerFunction($stateParams){
    console.log($stateParams);
    this.grumbl = grumbls[$stateParams.id];
  }
}());
