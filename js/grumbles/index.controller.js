"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);


  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;
    this.create = function(){
      this.grumbles.push({title: this.newGrumble.title});
      this.newGrumble.title = null
      console.log(this)
    };
    this.delete = function(index){
      this.grumbles.splice(index,1);
    }
  };
})();
