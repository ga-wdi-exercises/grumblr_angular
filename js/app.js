angular.module("grumblr", ["ui.router"])
.config([
  "$stateProvider",
  Router
])
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction])
.controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction])


function Router($stateProvider){
  console.log("working")
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    controller: "GrumbleShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
    })
  .state("grumbleCreate", {
    url: "/grumbles/new",
    controller: "GrumbleCreateController",
    controllerAs: "vm",
    templateUrl: "/js/ng-views/new.html"
  })
}

function GrumbleIndexControllerFunction(){
  console.log("I'm in the controller!");
  this.grumbles = grumbles;
}

function GrumbleShowControllerFunction($stateParams){
  console.log($stateParams);
  this.grumble = grumbles[$stateParams.id]
}
