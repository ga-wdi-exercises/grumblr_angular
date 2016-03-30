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
            console.log(response)
            // $state.go("grumbleIndex", {}, {reload: true});
          });
        }
        scope.update = function(){
          scope.grumble.$update({id: scope.grumble.id}, function(response){
            console.log(response);
          });
        }
        scope.delete = function(){
          scope.grumble.$delete({id: scope.grumble.id}, function(){
            $state.go("grumbleIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}());
