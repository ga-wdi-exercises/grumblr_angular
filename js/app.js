<<<<<<< HEAD
asdfjdafdos
=======
"use strict";

(function() {

  angular
  .module("grumblr", ["ui.router"])
  .config(["$stateProvider", RouterCallback])

  function RouterCallback($stateProvider) {
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      controller: "GrumbleIndexController",
      controllerAs: "vm",
      templateUrl: "js/grumbles/index.html"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      controller: "GrumbleShowController",
      controllerAs: "vm",
      templateUrl: "js/grumbles/show.html"
    })
  }

}())
>>>>>>> ui-router
