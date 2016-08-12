angular
  .module("grumblr")
    .controller("GrumbleIndexController", [ GrumbleIndexControllerFunction
    ]);

    function GrumbleIndexControllerFunction(){
          this.grumbles = grumbles;
    }
