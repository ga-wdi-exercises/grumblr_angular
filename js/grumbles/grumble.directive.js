"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi there, {{myName}}! {{coolAttribute}}</h1>',
      scope: {
        coolAttribute: '@'
      },
      link: function(scope){
        console.log(scope.coolAttribute);
        scope.myName = 'Slim Shady';
      }
    }
  });
})();
