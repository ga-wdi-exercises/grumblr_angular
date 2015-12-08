"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router",
    "ngResource",
    "grumbleIndexControllerModule"
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
      templateUrl: "js/grumbles/index.html",
      controller: "GrumbleIndexController"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html"
    });
  }
}());
