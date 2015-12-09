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
        // The '=' means that scope.grumble exists only inside the custom directive
        // The '?' means that this directive can be used if 'grumble' is not defined
        // by passing it in using an attribute
        // (data-grumble in this case)
        grumble: "=?"
      },
      link: function(scope, element, attributes){
        if(!scope.grumble) scope.grumble = new GrumbleFactory();
        scope.ifCreateSuccessful = function(response){
          scope.$parent.GrumbleIndexViewModel.grumbles.push(response);
          scope.grumble = new GrumbleFactory();
          console.log("Created!");
        }
        scope.ifUpdateSuccessful = function(response){
          console.log("Updated!");
        }
        scope.ifDeleteSuccessful = function(){
          console.log("Deleted!");
          $state.go("grumbleIndex");
        }
      }
    }
  }
}());
