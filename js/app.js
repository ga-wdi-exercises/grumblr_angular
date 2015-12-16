"use strict";

(function(){
  angular.module('grumblr',
  ["ui.router"]
)
.config([
  "$stateProvider",
  RouterFunction
]);

function RouterFunction($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateURL: "/js/grumbles/index.html"
  })
  .state("grumblesShow", {
    url: "/grumbles/:id",
    templateURL: "js/grumbles/show.html"
  })
}
}());
