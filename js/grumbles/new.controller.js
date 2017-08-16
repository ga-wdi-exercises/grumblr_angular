/* global angular */

angular.module('grumblr')
.controller('GrumbleNewController', [
  '$state',
  'Grumble',
  GrumbleNewController
])

function GrumbleNewController ($state, Grumble) {
  this.grumble = new Grumble()
  this.create = function () {
    this.grumble.$save(() => {
      $state.go('grumbleIndex')
    })
  }
}
