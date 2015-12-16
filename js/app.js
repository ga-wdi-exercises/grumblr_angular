"use strict";

(function(){
  angular
    .module("grumblr", [
      "ui.router",
      "grumbles"
      // We would include any other dependencies here as part of the array
    ])
    // Ths is a function that operates similiar to a config routes file in express. the function below will define the routes.
    .config([
      "$stateProvider",
      "$locationProvider",
      RouterFunction
    ]);

  // This runs at the beginning of the application as config has to be told to call the file...
  function RouterFunction($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
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
})();
