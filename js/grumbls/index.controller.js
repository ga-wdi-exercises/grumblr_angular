'use strict';

(function(){
  angular
  .module("grumbls")
  .controller("GrumblIndexController", [
    GrumblIndexControllerFunction
  ]);

  function GrumblIndexControllerFunction(){
    this.grumbls = grumbls;
    this.newGrumbl = {};
      this.create = function(){
      grumbls.unshift(this.newGrumbl);
      this.newGrumbl = {};
    console.log("I'm in the controller!");
    }
    this.delete = function(id){
      grumbls.splice(id, 1);
    }
    this.update = function(index){
      grumbls[index] = this.grumbl;
    };
  }
}());
