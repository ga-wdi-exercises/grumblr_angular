"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction,
  ]);

  function GrumbleIndexControllerFunction(){

    console.log("I'm in the controller!");
    this.grumbles = grumbles;

    this.newGrumble = {};
    this.create = function(){
      grumbles.unshift(this.newGrumble);
      this.newGrumble = {}
    }

    this.delete = function(index){
      this.grumbles.splice(index, 1)
    }

    this.update = function(index){
      this.grumbles[index]['title'] = this.editGrumble.title
    }





  }
})();
