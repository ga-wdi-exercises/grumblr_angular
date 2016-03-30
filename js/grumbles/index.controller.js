"use strict";
// each page should have its own controller. index controller and show controller

// in the index page include a link to the controller. It should ALWAYS go below the module

// to activate this controller we need to tell the router to use this controller for the grumbleIndex state.

// controllers are used to pass data to the view
(function(){
  angular
  .module("grumbles") // here we don't need to reference array after module. We are just referencing a module.
  .controller("GrumbleIndexController", [ //controller always needs a function to work
    "GrumbleFactory", // factory needs to be inserted into controller so it can use the factory data
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(GrumbleFactory){
    //Grumble Factory needs to be passed into controller function so it can access the API
     this.grumbles = GrumbleFactory.query();
  }
}());
