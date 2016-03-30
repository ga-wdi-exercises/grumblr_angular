(function(){
  angular
    .module( "grumble" )
    .controller( "GrumbleIndexController", [
      "GrumbleFactory",
      GrumbleIndexControllerFunction
    ]);

  function GrumbleIndexControllerFunction( GrumbleFactory ){
    GrumbleFactory.helloWorld();
  }
})();
