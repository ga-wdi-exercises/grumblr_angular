"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi There!</h1>',
      link: function(scope){
        scope.myName = 'Slim Shady';
      }
    };

  });
})();
