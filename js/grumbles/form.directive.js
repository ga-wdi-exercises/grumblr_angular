"use strict";

(function(){
  angular
    .module("grumbles")
    .directive("grumbleForm", formDirective);

    function formDirective(){
      return {
      templateUrl: "js/grumbles/_grumble_form.html",
      replace: true,
      scope: {
        grumble: "=",
        formType: "="
        },
      };
    }
})();
