var grumbles = [
  {
    title: "I am Grumble One"
  },
  {
    title: "I'm another Grumble"
  }
  ]


angular.module("grumblr", ["ui.router"])
.config(["$stateProvider", Router])
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction])
.controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction])

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
}

  function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
  }

function Router($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumblesShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"

  });
}
