"use strict";
(function(){
  angular
  .module("grumbles")
  .directive("grumbleShow",
  directiveFunction
)
function directiveFunction(){
  return {
    templateUrl: "/js/grumbles/_grumble_show.html",
    restrict: "C",
    replace: true,
    scope: {
      grumble: '='
    },
    link: function (scope){
      scope.myName = "Slim Shady";
      scope.sayHi = function(){
        alert("chika chicka");
      }
      console.log("link function")
    }
  }
}
})();
