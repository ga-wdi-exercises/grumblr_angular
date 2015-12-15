"use strict";
(function() {
  angular
    .module("grumbles")
    .controller("GrumbleNewController", [
      GrumbleNewControllerFunction
    ]);

  function GrumbleNewControllerFunction() {
    this.newGrumble = {};
    this.create = function() {
      grumbles.unshift(this.newGrumble);
      this.newGrumble = {}
    }
  }
}());
