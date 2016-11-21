angular
  .module("grumblr", ["ui.router"])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ])
  .controller("GrumbleIndexController", [
    "$state",
    GrumbleIndexControllerFunction
  ])
  .controller("GrumbleShowController",[
    "$stateParams",
    GrumbleShowControllerFunction
  ])
  .controller("GrumbleCreateController", [
    GrumbleCreateControllerFunction
  ]);

function GrumbleCreateControllerFunction(){
  this.addGrumble = function() {
    grumbles.push(this.newGrumble);
  }
}

function GrumbleShowControllerFunction($stateParams){
  console.log($stateParams.grumble);
  this.grumble = $stateParams.grumble;
  self = this;
  this.deleteGrumbler = function() {
    console.log(grumbles)
    grumbles.splice(grumbles.indexOf(self.grumble), 1)
  }
}

function GrumbleIndexControllerFunction($state){
  this.grumbles = grumbles;
  this.change = function(grumble){
    $state.go("grumbleShow",{grumble: grumble.title})
  }
}

function RouterFunction($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
  .state("grumbleShow",{
    url: "/grumbles/:grumble",
    controller: "GrumbleShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
  })
  .state("grumbleCreate", {
    url: "/creategrumble",
    templateUrl: "js/ng-views/create.html",
    controller: "GrumbleCreateController",
    controllerAs: "vm"
  })
}
