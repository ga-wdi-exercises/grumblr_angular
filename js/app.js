angular.module("grumblr", ["ui.router"])
.config(["$stateProvider", Router])
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
])
.controller("GrumbleShowController", [
  "$stateParams",
  GrumbleShowControllerFunction
])
.controller("GrumbleNewController", [
  "$stateParams",
  GrumbleNewControllerFunction
]);

function Router ($stateProvider){
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
  .state("grumbleNew", {
    url: "/grumbles/new",
    controller: "GrumbleNexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/new.html"
  });
}

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
}

function GrumbleShowControllerFunction($stateParams){
  this.grumble = grumbles[$stateParams.id];
}

function GrumbleNewControllerFunction($stateParams){

}
