"use strict";


angular.module("grumblr", ["ui.router"])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateUrl: "js/ng-views/index.html",
    controller: "GrumbleIndexController",
    controllerAs: "GrumbleIndexViewModel"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html"
  });
}

function GrumbleIndexControllerFunction(){
  this.grumbles = [
    {title: "Thesse"},
    {title: "Are"},
    {title: "Hardcoded"},
    {title: "Grumbles"}
  ]
}
