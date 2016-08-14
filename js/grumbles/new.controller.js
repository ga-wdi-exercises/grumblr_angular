angular
  .module("grumblr")
  .controller("GrumbleNewController", [
    '$stateParams',
    GrumbleNewControllerFunction
  ]);

  function GrumbleNewControllerFunction($stateParams){
    this.newGrumble = grumbles.title
    this.create = function() {
      grumbles.push(this.newGrumble)
    }
  }
