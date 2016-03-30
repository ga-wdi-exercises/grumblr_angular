"use strict";

(function(){
  angular
  .module("grumblr", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    RouterFuntion
  ]);

  function RouterFuntion($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      template: "I'm the Grumbles index!!!"
    });
  }
})();
