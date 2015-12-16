"use strict",

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);
  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;
    this.newGrumble = {};
    this.create = function(){
      this.newGrumble = {title: "this is a new gremble"};
      grumbles.unshift(this.newGrumble);
      };
    this.delete = function(id){
      grumbles.splice(id, 1);
    }
    };
})();
