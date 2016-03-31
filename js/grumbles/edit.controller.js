"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleEditController", [
      "GrumbleFactory",
      "$stateParams",
      "$stateProvider",
      GrumbleEditControllerFunction
    ]);

  function GrumbleEditControllerFunction( GrumbleFactory, $stateParams ){
    // this.grumble = GrumbleFactory.get({id: $stateParams.id});
    // this.update = function(){
    //   this.grumble.$update({id: $stateParams.id});
    //   this.goHome();
    // }
    // this.destroy = function(){
    //   this.grumble.$delete({id: $stateParams.id});
    //   this.goHome();
    // }
    // this.goHome = function(){
    //   $state.transitionTo("GrumbleIndex", {}, {
    //     reload: true,
    //     inherit: false,
    //     notify: true
    //   });
    // }
  }
}());
