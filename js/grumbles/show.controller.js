"use strict";

(function() {
  angular
    .module("grumbles")
    .controller("GrumbleShowController", [
      "$stateParams",
      GrumbleShowControllerFunction
    ]);

  function GrumbleShowControllerFunction($stateParams) {
    this.grumble = grumbles[$stateParams.id];
    this.grumbles = grumbles;
    this.delete = function() {
      grumbles.splice($stateParams.id, 1);
    }
    this.edit = function() {
      this.grumbleEdit = this.grumble;
    }
    this.update = function() {
      this.grumble = this.grumbleEdit;
      this.grumbleEdit = "";
    }
  }
}());
