/* global angular */

angular.module('grumblr')
.controller('GrumbleShowController', [
  '$stateParams',
  'Grumble',
  GrumbleShowController
])

function GrumbleShowController($stateParams, Grumble) {
  this.grumble = Grumble.get({id: $stateParams.id})
}
