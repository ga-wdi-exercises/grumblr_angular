/* global angular */

angular.module('grumblr')
.controller('GrumbleEditController', [
  '$state',
  'Grumble',
  GrumbleEditController
])

function GrumbleEditController ($state, Grumble) {
  this.grumble = Grumble.get({id: $state.params.id})
  this.update = function () {
    this.grumble.$update({id: $state.params.id})
  }
  console.log(this.grumble)
}
