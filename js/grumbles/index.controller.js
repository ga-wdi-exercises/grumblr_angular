/* global angular */

(function () {
  angular.module('grumblr')
  .controller('GrumbleIndexController', [
    'Grumble',
    GrumbleIndexControllerFunction
  ])

  function GrumbleIndexControllerFunction (Grumble) {
    this.grumbles = Grumble.query()
  }
})()
