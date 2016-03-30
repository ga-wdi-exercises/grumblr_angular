"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleForm",[
    "$state",
    "GrumbleFactory",
    formDirective]);

    function formDirective($state, GrumbleFactory){
      return {
        templateUrl: "js/grumbles/_grumble_form.html",
        replace: true,
        scope: {
          grumble: "=",
          formType: "@"
        },
        link: linkFunction
      };

      function linkFunction(scope){
        scope.create = function(){
          scope.grumble.$save(scope.grumble, function(grumble){
            $state.go("grumbleIndex", {}, {reload: true});
          });
        };
        scope.update = function(){
          scope.grumble.$update({id: scope.grumble.id}, function(response){
            console.log(response);
          });
        };
        scope.delete = function(){
          scope.grumble.$delete({id: scope.grumble.id}, function(response){
            $state.go("grumbleIndex", {}, {reload: true});
          });
        };
      }

    }
  })();
