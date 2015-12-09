"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleForm", [
    "GrumbleFactory",
    "$state",
    GrumbleFormDirectiveFunction
  ]);

  function GrumbleFormDirectiveFunction(GrumbleFactory, $state){
    return{
      templateUrl: "js/grumbles/form.html",
      scope: {
        grumble: "="
      },
      link: function(scope){
        scope.create = function(){
          scope.grumble.$save(function(response){
            $state.go("grumbleIndex", {}, {reload: true})
          });
        }
      }
    }
  }
}());
