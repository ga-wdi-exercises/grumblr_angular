angular
  .module("grumblr")
    .controller("GrumbleIndexController", [ GrumbleIndexControllerFunction
    ]);

    function GrumbleIndexControllerFunction(){
          this.grumbles = grumbles;
          this.destroy = function(grumble_index){
            grumbles.splice(grumble_index, 1);
          }
    }
