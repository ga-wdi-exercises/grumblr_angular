"use strict";

(function(){
  angular
  .module("grumbles")
  .directive("grumbleShow", directiveFunction)

  function directiveFunction(){
    return {
      templateUrl: "js/grumbles/_grumble_show.html",
      restrict: "C",
      replace: true,
        scope: {
          // @ means treat the directive (in index.html) value as a string
          grumble: '='
        },
      // any time this directive is used, this method is going to be invoked
      // link: function(scope){
      //   scope.create = function(){
      //     scope.grumble.$save(scope.grumble, function(grumble){
      //       $state.go('grumbleShow', grumble);
      //     });
      //   }
      // }
    }
  }
}());
