"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumblesIndexController", [
    GrumblesIndexControllerFunction
  ]);

  function GrumblesIndexControllerFunction(){
    console.log("I'm in the controller!")
  }
})();
