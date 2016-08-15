angular
.module("grumblr")
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction]);

function GrumbleIndexControllerFunction(){
    console.log("I'm a controller");
    this.grumbles = grumbles
}
