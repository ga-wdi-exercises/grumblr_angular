"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: "<h1 ng-click='complementMe()'>My name is {{myName}}</h1>",
      link: function(scope){
        console.log('directive used');
        scope.myName = 'Slim Shady';
        scope.complementMe = function(){
          alert('You’re looking good today');
        }
      }
    }
  });
})();
