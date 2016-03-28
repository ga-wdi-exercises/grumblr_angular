"use strict";
(function(){
  .module( "grumbles" )
  .factory( "GrumbleFactory", [
    GrumbleFactoryFunction
  ]);
function GrumbleFactoryFunction(){
  return {
    helloWorld: function(){
      console.log( "Hello world!" );
    }
  }
}
}());
