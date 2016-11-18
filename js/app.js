angular
  .module("grumblr", ["ui.router"])
  .config(["$stateProvider", Router])
  .controller("GrumbleIndexController", [ GrumbleIndexControllerFunction ])
  .controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction]);

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
}

function GrumbleShowControllerFunction($stateParams){
  console.log($stateParams);
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
  .state("grumbleShow",{
    url: "/grumbles/:id",
    controller: "GrumbleShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
  });
}
