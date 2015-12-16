"use strict";

(function(){

  angular
    .module("grumblr", [
      "ui.router",
      "grumbles"
    ])
    .config([
      "$stateProvider",
      "$locationProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
      .state("grumbleIndex", {
        url: "/grumbles", // route to some action
        templateUrl: "js/grumbles/index.html", // eq. to res.send
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
})();
