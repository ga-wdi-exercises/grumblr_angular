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
      url:"/grumbles",
      templateUrl:"js/grumbles/index.html",
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexVM"
    })
    .state("grumbleNew", {
      url: "/grumbles/new",
      templateUrl: "js/grumbles/new.html",
      controller: "NewController",
      controllerAs: "GrumbleNewVM"
    })
    .state("grumbleEdit", {
      url: "/grumbles/edit",
      templateUrl: "js/grumbles/edit.html",
      controller: "EditController",
      controllerAs: "GrumbleEditVM"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html",
      controller: "ShowController",
      controllerAs: "GrumbleShowVM"
    });
  }

}());
