"use strict";

(function(){
  angular
    .module("grumbles")
    .controller("GrumbleShowController", [
      "$stateParams",
      "$firebaseObject",  // We are now using $firebaseObject, not $firebaseArray.
      GrumbleShowControllerFunction
    ]);

  function GrumbleShowControllerFunction($stateParams, $firebaseObject){
    var vm = this;

    // This time, ref contains a reference to a specific grumble.
    var ref = firebase.database().ref().child("grumbles/" + $stateParams.id);

    // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `vm.grumble`.
    $firebaseObject(ref).$loaded().then(function(grumble){
      vm.grumble = grumble
    });

    // This method is triggered when the user clicks "Update Grumble".
    vm.update = function(){
      vm.grumble.$save();
    }
  }
})();
