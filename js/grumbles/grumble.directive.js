"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi there, {{myName}}!</h1>',
      restrict: 'E',
      replace: true,
      link: function(scope){
        scope.myName = 'Slim Shady';
      }
    };
  });
})();
