"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleShow",function(){
    return {
      templateUrl: "js/grumbles/_grumble_show.html",
      restrict: "MACE",
      replace: true,
      scope: {
        grumble: '='
      }
    };
  });
  // .directive("grumbleForm", function(){
  //   return{
  //     templateUrl:"js/grumbles/_grumble_form.html",
  //     replace: false,
  //     scope: {
  //       grumble: '=',
  //       model: '='
  //     }
  //   };
  // });
})();
