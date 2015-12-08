"use strict";

(function(){
  angular
  .module("grumbles", [
    "ngResource"
  ])
  .factory("GrumbleFactory", [
    "$resource",
    "$location",
    GrumbleFactoryFunction
  ]);

  function GrumbleFactoryFunction($resource, $location){
    return $resource("http://localhost:3000/grumbles/:id");
  }
}());
