"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router",
    "ngResource",
    "grumbles"
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
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }
}());
