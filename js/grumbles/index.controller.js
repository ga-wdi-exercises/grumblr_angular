var grumbles = [
  {
    body: "Grumble1"
  },
  {
    body: "Grumble2"
  },
  {
    body: "Grumble3"
  }
]

angular
.module("grumblr")
.controller("GrumbleIndexController", [
  GrumbleIndexControllerFunction
]);

function GrumbleIndexControllerFunction(){
  this.grumbles = grumbles;
  console.log(this.grumbles);
}
