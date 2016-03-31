"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleShow", directiveFunction)

  function directiveFunction (){
    return {
      templateUrl: "js/grumbles/_grumble_show.html",
      restrict: "C",
      replace: true,
      scope: {
      grumble: '@'
    },
      link: function(scope){
        scope.myName = "Miss Jackson if you are nasty";
        scope.sayHi = function(){
          alert("Chigga Chigga");
        }
      }
    }
  }
})();
