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
    .state("grumbleNew", {
      url: "/grumbles/new",
      templateUrl: "js/grumbles/new.html",
      controller: "GrumbleNewController",
      controllerAs: "GrumbleNewViewModel"
    })
    .state("grumbleEdit", {
      url: "/grumbles/:id/edit",
      templateUrl: "js/grumbles/edit.html",
      controller: "GrumbleEditController",
      controllerAs: "GrumbleEditViewModel"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }
}());
