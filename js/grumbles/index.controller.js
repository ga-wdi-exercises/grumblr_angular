angular
.module("grumblr")
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
]);

function GrumbleIndexControllerFunction(){
  console.log("I'm controlling things babe!");
  this.grumbles = grumbles;
}
