angular.module("grumblr", ["ui.router"])
  .config(["$stateProvider",
  Router])
  .controller("GrumbleIndexController", [GrumbleIndexControllerFunction])

function Router($stateProvider) {
  console.log("working");
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: 'js/ng-views/index.html'
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    controller: "GrumbleShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
  });
}

function GrumbleIndexControllerFunction() {
  console.log("I'm in the controller!");
  this.grumbles = grumbles;
}

angular.module("grumblr")
  .controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction]);

function GrumbleShowControllerFunction($stateParams) {
  console.log($stateParams);
  this.grumble = grumbles[$stateParams.id];
}
