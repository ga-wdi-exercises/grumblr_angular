"use strict";


angular
  .module("grumblr", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("GrumbleFactory", [
    "$resource",
    GrumbleFactoryFunction
  ])
  .controller("GrumbleIndexController", [
    "GrumbleFactory",
    GrumbleIndexControllerFunction
  ])
  .controller("GrumbleNewController", [
    "GrumbleFactory",
    "$state",
    GrumbleNewControllerFunction
  ])
  .controller("GrumbleShowController", [
    "GrumbleFactory",
    "$stateParams",
    GrumbleShowControllerFunction
  ])
  .controller("GrumbleEditController", [
    "GrumbleFactory",
    "$stateParams",
    "$state",
    GrumbleEditControllerFunction
  ])

function RouterFunction($stateProvider){
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateUrl: "js/ng-views/index.html",
    controller: "GrumbleIndexController",
    controllerAs: "vm"
  })
  .state("grumbleNew", {
    url: "/grumbles/new",
    templateUrl: "js/ng-views/new.html",
    controller: "GrumbleNewController",
    controllerAs: "vm"
  })
  .state("grumbleShow", {
    url: "/grumbles/:id",
    templateUrl: "js/ng-views/show.html",
    controller: "GrumbleShowController",
    controllerAs: "vm"
  })
  .state("grumbleEdit", {
    url: "/grumbles/:id/edit",
    templateUrl: "js/ng-views/edit.html",
    controller: "GrumbleEditController",
    controllerAs: "vm"
  })
}

function GrumbleFactoryFunction( $resource ) {
  return $resource("http://localhost:3000/grumbles/:id", {}, {
    update: { method: "PUT" }
  })
}

function GrumbleIndexControllerFunction( GrumbleFactory ) {
  this.grumbles = GrumbleFactory.query()
}

function GrumbleNewControllerFunction( GrumbleFactory, $state ) {
  this.grumble = new GrumbleFactory()
  this.create = function() {
    this.grumble.$save(function(grumble) {
      $state.go("grumbleShow", {id: grumble.id})
    })
  }
}

function GrumbleShowControllerFunction( GrumbleFactory, $stateParams ) {
  this.grumble = GrumbleFactory.get({id: $stateParams.id})
  console.log(this.grumble)
}

function GrumbleEditControllerFunction( GrumbleFactory, $stateParams, $state ) {
  this.grumble = GrumbleFactory.get({id: $stateParams.id})
  this.update = function() {
    this.grumble.$update({id: $stateParams.id}, function(grumble) {
      $state.go("grumbleShow", {id: grumble.id})
    })
  }
  this.destroy = function(){
    this.grumble.$delete({id: $stateParams.id}, function() {
      $state.go("grumbleIndex")
    })
  }
}
