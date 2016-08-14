angular
  .module("grumblr")
  .controller("GrumbleShowController", [
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    console.log($stateParams)
    this.grumble = grumbles[$stateParams.id];
    this.destroy = function(grumble_index){
      grumbles.splice(grumble_index, 1);
    }
  }
