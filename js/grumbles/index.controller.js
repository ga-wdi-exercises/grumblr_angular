angular
.module("grumblr")
.controller("GrumbleIndexController", [
  GrumbleIndexControllerCallback
]);

function GrumbleIndexControllerCallback() {
  this.grumbles = grumbles;
}
