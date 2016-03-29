"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);
  function GrumbleIndexControllerFunction(){
    this.grumbles = "These are some grumbles";
    console.log("im in the controller!");
  }
}());
