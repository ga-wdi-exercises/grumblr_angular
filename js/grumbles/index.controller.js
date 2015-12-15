"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = [
      {
        title: "I am Grumble One"
      },
      {
        title: "I'm another Grumble"
      }
    ];
    this.newGrumble = {};
    this.create = function(){
      grumbles.unshift(this.newGrumble);
      this.newGrumble = {}
    }
    this.delete = function(id){
      grumbles.splice(id, 1);
    }
  }
}());
