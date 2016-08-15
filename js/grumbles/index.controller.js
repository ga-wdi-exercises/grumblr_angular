angular
.module("grumblr")
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
]);

function GrumbleIndexControllerFunction(){
  console.log("I'm in the controller! jan");
  this.grumbles = grumbles;
  this.newGrumble ={};
  this.create = function(){
    grumbles.unshift(this.newGrumble);
    this.newGrumble={}
  }
  this.delete = function(id){
    grumbles.splice(id, 1);
  }
}
