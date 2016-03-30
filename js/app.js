"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router",
    "agrumble"

  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/grumbles/index.html"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html"
    });
  }
})();
