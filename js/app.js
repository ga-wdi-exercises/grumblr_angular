"use strict";


(function(){
  angular.module("grumblr", ['ui.router'])
  .config(["$stateProvider", Router])
  .controller("GrumbleIndexController", [GrumbleIndexControllerFunction])
  .controller("GrumbleShowController", ["$stateParams", GrumbleShowControllerFunction])

  function Router($stateProvider){
    console.log("working");
    $stateProvider
    .state("grumbleIndex",{
      url: "/grumbles",
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel",
      templateUrl: "js/grumbles/index.html"
    })
    .state("grumbleShow",{
      url: "/grumbles/:id",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel",
      templateUrl: "js/grumbles/show.html"
    })
  }

  function GrumbleIndexControllerFunction(){

    console.log("index")
    this.grumbles = grumbles;
    this.newGrumble = {};
    this.create = function(){
      grumbles.unshift(this.newGrumble);
      this.newGrumble = {}
    }
    this.delete = function(id){
      grumbles.splice(id, 1);
    }
  }


  function GrumbleShowControllerFunction($stateParams){

    this.grumble = grumbles[$stateParams.id];
    console.log("show")

  }

}());
