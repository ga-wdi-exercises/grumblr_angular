(function(){
  "use strict";
  angular
  .module("grumbles")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
  }
})();
