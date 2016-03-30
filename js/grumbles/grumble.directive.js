"use strict";

(function() {
  angular.module("grumbles")
    .directive("grumbleShow", function() {
      return {
        templateUrl: "js/grumbles/_grumble_show.html",
        scope: {
          grumble: "="
        },
      };
    });
})();
