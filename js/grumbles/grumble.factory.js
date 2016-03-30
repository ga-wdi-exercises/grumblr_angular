// a factory HAS to return something (usually an object)
// service are just like factories, but doesn't return an object, just this with constructor function.
"use strict";

(function(){
  angular
  .module("grumbles") // attaching it to grumbles module
  .factory("GrumbleFactory", [
    "$resource",
    FactoryFunction //factory needs a function
  ]);

  // $resource is like "specific part of jquery" it gives us
    // Grumble.get
    // Grumble.save
    // Grumble.query
    // Grumble.remove
    // Grumble.delete

  function FactoryFunction($resource){
     return $resource( "http://localhost:3000/grumbles/:id", {}, {
       update: {method: "PUT"} //ngResource does not come with a native update method. We need to define it in the FactoryFunction return statement, indicating that update corresponds to a PUT request.
       
     }); //this return is returning the object that a factory is supposed to return
  }

}());
