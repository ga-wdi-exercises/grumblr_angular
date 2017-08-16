angular
  .module('grumblr')
  .factory('Grumble', [
    '$resource',
    Grumble
  ])

  function Grumble ($resource) {
    return $resource('http://localhost:3000/api/grumbles/:id', {}, {
      update: { method: 'PUT' }
    })
  }
