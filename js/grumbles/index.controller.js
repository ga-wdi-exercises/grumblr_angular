"use strict";

(function(){
  angular
  .module("grumbleIndexControllerModule", [])
  .controller("GrumbleIndexController", [
    "$scope",
    GrumbleIndexControllerFunction
  ]);

  function GrumbleIndexControllerFunction($scope){
    $scope.grumbles = [
      {title: "This is the first Grumble"},
      {title: "Yet another Grumble"},
      {title: "Moar Grumbles"}
    ];
  }
}());
