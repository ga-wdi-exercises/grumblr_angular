angular
  .module("grumblr")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

function GrumbleIndexControllerFunction(){
    console.log("I'm in the controller!");
}
