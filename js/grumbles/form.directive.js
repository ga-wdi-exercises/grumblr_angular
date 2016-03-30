"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm', [
    '$state',
    '$stateParams',
    'GrumbleFactory',
    function($state, $stateParams, Grumble){
    return {
      templateUrl: 'js/grumbles/_form_view.html',
      replace: true,
      scope: {
        grumble: '=',
        formType: '@'
      },
      scope: {
        grumble: '=',
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.grumble.$save(scope.grumble, function(grumble){
            $state.go('grumbleShow', grumble);
          });
        }
        scope.update = function(){
          scope.grumble.$update({id: $stateParams.id});
          $state.go("grumbleIndex");
        }
        scope.destroy = function(){
          scope.grumble.$delete({id: $stateParams.id});
          $state.go("grumbleIndex");
        }
      }
    }
  }]
);
}())
