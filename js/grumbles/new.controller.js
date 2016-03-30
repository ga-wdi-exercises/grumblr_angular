"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleNewController", [
      "GrumbleFactory",
      "$state",
      "$stateParams",
      GrumbleNewControllerFunction
    ]);

    function GrumbleNewControllerFunction( GrumbleFactory, $state, $stateParams ){
      this.grumble = new GrumbleFactory();
      this.create = function() {
        this.grumble.$save().then(function(data) {
          $state.go("grumbleShow", {id: data.id}, {reload: true});
        });
      }
    }
}());
