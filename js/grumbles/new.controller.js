"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleNewController", [
      "GrumbleFactory",
      "$stateParams",
      "$state",
      GrumbleNewControllerFunction
    ])

    function GrumbleNewControllerFunction( GrumbleFactory, $stateParams, $state ){
      this.grumble = new GrumbleFactory();
      this.create = function(){
        this.grumble.$save()
        $state.go("grumbleIndex", {}, {reload: true});
      }
    }
}());
