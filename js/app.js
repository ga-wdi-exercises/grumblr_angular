"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router",
    "grumbles"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/grumbles/index.html",
      controller: "GrumblesIndexController"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html"
    });
  }
})();
