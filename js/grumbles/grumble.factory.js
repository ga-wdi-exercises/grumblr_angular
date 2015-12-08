"use strict";

(function(){
  angular
  .module("grumbles", [
    "ngResource"
  ])
  .factory("GrumbleFactory", [
    "$resource",
    GrumbleFactoryFunction
  ]);

  function GrumbleFactoryFunction($resource){
    return $resource("http://localhost:3000/grumbles/:id");
  }
}());
