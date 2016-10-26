angular
  .module("grumblr", [
    "ui.router"
  ])
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
        controllerAs: "vm"
      })
  }

  function GrumbleIndexControllerFunction(){
    this.grumbles = [
      {title: "These"},
      {title: "Are"},
      {title: "Hardcoded"},
      {title: "Grumbles"}
    ]
  }
