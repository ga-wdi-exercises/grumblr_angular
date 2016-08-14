angular
  .module("grumblr")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

function GrumbleShowControllerFunction($stateParams){
    this.grumble = grumbles[$stateParams.id];
}
