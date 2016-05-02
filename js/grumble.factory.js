"use strict";

(function(){
  angular
    .module( "grumbles" )
    .factory("GrumbleFactory", GrumbleFactoryFunc);

    GrumbleFactoryFunc.$inject = [ "$resource" ];
    function GrumbleFactoryFunc($resource) {
      return $resource("http://localhost:3000/grumbles/:id", {}, {
        update: { method: "PUT" }
      });
    }

})();
