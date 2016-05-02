
"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", GrumbleIndexControllerFunc)

  GrumbleIndexControllerFunc.$inject = [ "GrumbleFactory" ];
    function GrumbleIndexControllerFunc(GrumbleFactory) {
    var indexVm = this;
    indexVm.grumbles = GrumbleFactory.query();
    indexVm.newGrumble = new GrumbleFactory();

    indexVm.create = function($state){
      indexVm.newGrumble.$save().then(function(res) {
        indexVm.grumbles.push(res)
      })
    };
  }

})();
