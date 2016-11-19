angular
  .module("grumblr", ["ui.router"])
  .config(["$stateProvider", RouterFunction])
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ])
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ])
  .controller("GrumbleCreateController", [
    GrumbleCreateControllerFunction
  ]);

function GrumbleCreateControllerFunction(){
  this.addGrumble = function() {
    let grumble = {title: this.newGrumble};
    grumbles.push(grumble);
  }
}

function GrumbleShowControllerFunction($stateParams){
  this.grumble = grumbles[$stateParams.id]
}

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
}

function RouterFunction($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumbleCreate", {
    url: "/creategrumble",
    templateUrl: "js/ng-views/create.html",
    controller: "GrumbleCreateController",
    controllerAs: "vm"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"
  });
}
