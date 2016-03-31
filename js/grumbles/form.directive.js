"use strict";
(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm', ['$state', function($state){
    return {
      templateUrl: 'js/grumbles/_grumble_form.html',
      replace: true,
      scope: {
        grumble: '=',
        formType: '@'
      },
      link: function(scope){
        scope.create = function(){
          scope.grumble.$save(scope.grumble, function(grumble) {
            $state.go('/grumbles/' + grumble.id);
          });
        }
        scope.update = function(){
          scope.grumble.$update(scope.grumble, function(grumble) {
            $state.go('grumbleShow', {id:grumble.id});
          });
        }
      }
    }
  }]);
})();
