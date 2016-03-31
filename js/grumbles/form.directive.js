"use strict";

(function(){
  angular
  .module("grumblr")
  .directive("grumbleForm", function(){
    return{
      templateUrl: "js/grumbles/_grumble_form.html",
      replace: true,
      scope: {
        grumble: "="
      }
    }
  })
})();
