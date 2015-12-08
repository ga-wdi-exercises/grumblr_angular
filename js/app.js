"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $urlRouterProvider){
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
}());
