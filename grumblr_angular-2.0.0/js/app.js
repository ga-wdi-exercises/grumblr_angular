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
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel"
    })
    .state("grumblesNew", {
      url: "/grumbles/new",
      templateUrl: "js/grumbles/new.html",
      controller: "GrumbleNewController"
      controllerAs: "GrumbleNewViewModel"
    });
    .state("grumblesEdit", {
      url: "/grumbles/edit",
      templateUrl: "js/grumbles/new.html",
      controller: "GrumbleEditController"
      controllerAs: "GrumbleEditViewModel"
    });
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }
}());
