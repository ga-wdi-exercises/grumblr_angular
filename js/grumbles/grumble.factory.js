"use strict";

(function(){
  angular
  // module is being getter
    .module( "grumbles" )
    // using .fact as a setter, naming w 1st, 2nd is a callback
    .factory( "GrumbleFactory", [
      "$resource",
      GrumbleFactoryFunction
    ]);

  function GrumbleFactoryFunction($resource){
    return $resource("http://localhost:3000/grumbles/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
