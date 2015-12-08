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
        scope.ifSaveSuccessful = function(response){
          console.log(response);
          $state.go($state.current, {}, {reload: true});
        }
        scope.ifDeleteSuccessful = function(){
          console.log("Deleted!");
          $state.go("grumbleIndex");
        }
      }
    }
  }
}());
