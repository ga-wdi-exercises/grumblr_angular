"use strict";
// each page should have its own controller. index controller and show controller

// in the index page include a link to the controller. It should ALWAYS go below the module

// to activate this controller we need to tell the router to use this controller for the grumbleIndex state.

// controllers are used to pass data to the view
(function(){
  angular
  .module("grumbles") // here we don't need to reference array after module. We are just referencing a module.
  .controller("GrumbleIndexController", [ //controller always needs a function to work
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction(){
    this.grumbles = grumbles;  //this creates a grumbles property for the instance. Now .grumbles is available in the view like @grumbles in Ruby
    // grumbles matches global grumbles variable in index page
    console.log("I'm in the controller!");
  }
}());
