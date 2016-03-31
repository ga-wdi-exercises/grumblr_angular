"use strict";

(function(){
  angular
    .module( "grumbles" )
    .factory( "GrumbleFactory", [
      "$resource",
      FactoryFunction
    ]);

    function GrumbleFactoryFunction( $resource ){
      return $resource( "http://localhost:3000/grumbles/:id", {}, {
        update: {method:"PUT"}
      });
    }
}());
