"use strict";

(function(){
  angular.module('grumblr',
  ["ui.router",
  "grumbles"
  ]
)
.config([
  "$stateProvider",
  RouterFunction
]);

function RouterFunction($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateURL: "/js/grumbles/index.html",
    controller: "GrumbleIndexController",
    controllerAs: "GrumbleIndexViewModel"
  });
}
}());
