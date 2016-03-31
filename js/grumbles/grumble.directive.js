(function(){
  angular
  .module("grumblr")
  .directive("grumbleShow", function(){
    return {
      templateUrl: "js/grumbles/_grumble_show.html",
      restrict: "A",
      replace: true,
      scope: {
        grumble: "="
      }
    }
  })
})();
