"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = "This is a list of all the grumbles. An 'index' of grumbles if you will. Well, not really because we don't have any data yet."
  }
}());
