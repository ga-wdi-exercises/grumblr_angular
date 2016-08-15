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
}
