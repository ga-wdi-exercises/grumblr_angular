angular.module("grumblr", ["ui.router"])
.config(["$stateProvider", Router]);

function Router($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "GrumbleIndexViewModel",
    templateUrl: "js/grumbles/index.html"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    controller: "GrumbleShowController",
    controllerAs: "GrumbleShowViewModel",
    templateUrl: "js/grumbles/show.html"
  });
}
