(function(){
angular
.module("grumblr")
.controller("GrumbleShowController", [
  "$stateParams",
  GumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
  console.log($stateParams);
  this.grumble = grumbles[$stateParams.id];
}
});
