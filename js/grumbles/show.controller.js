angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  GrumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
  console.log("Show controller working")
  this.grumble = grumbles[$stateParams.id]

}
