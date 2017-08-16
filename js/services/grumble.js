/* global angular */

angular.module('grumblr')
.factory('Grumble', [
  '$resource',
  grumbleService
])

function grumbleService ($resource) {
  return $resource('http://localhost:3000/grumbles/:id', {}, {
    update: {
      method: 'PUT'
    }
  })
}
