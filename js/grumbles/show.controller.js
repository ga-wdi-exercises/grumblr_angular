angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  GrumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
  console.log("in the show");
  this.grumble = grumbles[$stateParams.id];
}
