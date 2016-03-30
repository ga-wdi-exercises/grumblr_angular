"use strict";

(function(){
  angular
    .module( "grumbles" )
    .controller( "GrumbleNewController", [
      "GrumbleFactory",
      "$state",
      GrumbleNewControllerFunction
    ]);
// new controller doesn't need state prams because there's no URL yet

    function GrumbleNewControllerFunction( GrumbleFactory, $state ){
      this.grumble = new GrumbleFactory(); // new GrumbleFactory means that new (grumble) should be a new resource
      this.create = function(){ // makes create method that is called by ng-click in form.
        this.grumble.$save() //$save is an API method. All API methods have a $ sign.  GrumbleFactory allows us to use the API methods.
        $state.go("grumbleIndex")
      }
    }
}());
