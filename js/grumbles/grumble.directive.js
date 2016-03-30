"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi, my name is {{myName}}</h1>',
      restrict: 'MACE',
      replace: true,
      link: function (scope) {
        scope.myName = 'Slim Shady';
      }
    }
  });
})();
