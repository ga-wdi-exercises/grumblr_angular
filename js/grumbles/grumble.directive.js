"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleShow", function(){
    return {
      templateUrl: 'js/grumbles/_grumble_show.html',
      replace: true,
      scope: {
        grumble: '='
      }
    };
  });
})();
