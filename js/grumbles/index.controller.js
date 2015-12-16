"use strict";

// referencing module that already exists:
(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = "These are some grumbles.";
  }
}());
