angular
.module("grumblr")
.controller("GrumbleIndexController", [GrumbleIndexControllerFunction]);

function GrumbleIndexControllerFunction(){
    console.log("I'm a controller");
    this.grumbles = grumbles
    this.newGrumble = {};
    this.create = function(){
        grumbles.unshift(this.newGrumble);
        this.newGrumble = {}
    }
}
