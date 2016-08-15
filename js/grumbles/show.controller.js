angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  grumbleShowControllerCallback
]);

function grumbleShowControllerCallback($stateParams) {
  this.grumble = grumbles[$stateParams.id];
}
