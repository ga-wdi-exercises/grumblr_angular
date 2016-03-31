'use strict';

(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm',['$state', 'GrumbleFactory', grumbleForm]);

  function grumbleForm($state, GrumbleFactory){
    return {
      templateUrl: 'views/grumbles/_grumble_form.html',
      replace: true,
      scope: {
        grumble: '=',
        formType: '@'
      },
      link: linkFunction
    };
    function linkFunction(scope){
      scope.create = function(){
        GrumbleFactory.save(scope.grumble, function(grumble) {
          $state.go('/grumbles/' + grumble.id);
        });
      };
    }
  }
