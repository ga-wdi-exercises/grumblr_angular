"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController", GrumbleShowControllerFunc)

  GrumbleShowControllerFunc.$inject = [ "GrumbleFactory", "$stateParams" ];
  function GrumbleShowControllerFunc(GrumbleFactory, $stateParams) {
    var showVm = this;
    showVm.grumble = GrumbleFactory.get({id: $stateParams.id});

    showVm.update = function() {
      showVm.grumble.$update({id: $stateParams.id});
    };

    showVm.delete = function() {
      showVm.grumble.$delete({id: $stateParams.id} );
    }
  };

})();
