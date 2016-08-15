angular
.module("grumblr")
.controller("GrumbleShowController",[
    "$stateParams",
    GrumbleShowControllerFunction
]);

function GrumbleShowControllerFunction($stateParams){
    console.log('Show Controller')
    console.log($stateParams)
    this.grumble = grumbles[$stateParams.id]
    this.newGrumble = {};
    this.create = function(){
        grumbles.unshift(this.newGrumble);
        this.newGrumble = {}
    }
}
