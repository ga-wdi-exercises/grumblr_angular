"use strict";

(function(){
  angular
  .module('grumbles')
  .directive('grumbleShow', function(){
    return {
      templateUrl: "/js/grumbles/_grumble_show.html",
      restrict: 'E',
      replace: true,
      scope: {
        grumble: '=',
        showLink: '='
      },
      link: function(scope){
      }
    };
  });
})();
