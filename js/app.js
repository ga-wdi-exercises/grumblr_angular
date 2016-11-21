angular.module("grumblr", ["ui.router"])
.config(["$stateProvider", Router])
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction])
.controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction])
.controller("GrumbleNewController", [GrumbleNewControllerFunction]);


function Router($stateProvider){
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

  })
  ;
  }


function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
  this.addgrumblr = function(){
    let grumble = {title: this.newgrumblr.title}
    this.grumbles.push(grumble)
  }

}

function GrumbleShowControllerFunction($stateParams){
  this.grumble = grumbles[$stateParams.id];
}

function GrumbleNewControllerFunction(){
  this.addgrumblr = function(){
    let grumble = {title: this.newgrumblr.title}
    this.grumbles.push(grumble)
  }
}
