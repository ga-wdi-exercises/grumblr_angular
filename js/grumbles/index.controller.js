"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ])

  function GrumbleIndexControllerFunction(){
  //  this.grumbles = grumbles
   this.newGrumble = {};
   this.create = function(){
  grumbles.unshift(this.newGrumble);
  this.newGrumble = {}
}
this.edit = function(index){
  var grumblr = this.grumbles[index];
  this.content = grumblr;
}

this.delete = function(id){
  grumbles.splice(id, 1);
  }

  this.formIsVisible = false
 this.toggleForm = function(){
   console.log("toggleform")
   if(this.formIsVisible){
     this.formIsVisible = false
   }
   else{
     this.formIsVisible = true
   }
 }
}
}());
