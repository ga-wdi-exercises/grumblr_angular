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
      templateUrl:"js/grumbles/index.html"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "jus/grumbles/show.html"
    });
  }

}());
