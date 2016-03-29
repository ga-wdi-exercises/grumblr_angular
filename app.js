"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router", // these are dependency modules
    "grumbles" // can't remove brackets or you get error
  ])
  .config([
    "$stateProvider",// routes go inside a config module. stateprovider allows us to manage states. State = route (URL). It is in quotation marks to prevent errors during js minification.
    RouterFunction // config needs a function so this is the function for config. This can be named something else
  ]);

  function RouterFunction($stateProvider){ //function for .config
    $stateProvider
    .state("grumbleIndex", { //.state is a route/URL
      url: "/grumbles", // type in this link after /#/ to see index.html. Any link that comes after a hashtag doesn't cause page refresh.

      // hashtag is a jump anchor

      // url: "/grumbles" is the path I want this state to be activated at
      templateUrl: "js/grumbles/index.html", // not this link. This is creating a partial for all my html in the js/grumbles/index.html file. This is the path to that partial
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel" //save this instance of a controller as... so that we can actually use the properties in the index file.
      // this is called GrumbleIndexViewModel because it takes things from teh model and makes it availble in the view
    })

    .state("grumbleShow", { // this creates a new URl for the show page
     url: "/grumbles/:id", // :id can be a number or word
     templateUrl: "js/grumbles/show.html"
     });
  }
}()); //IIFE all of these functions will be called immediately within this function
