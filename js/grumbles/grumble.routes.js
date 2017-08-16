/* global angular */

angular
.module('grumblr')
.config([
  '$stateProvider',
  RouterFunction
])

function RouterFunction ($stateProvider) {
  $stateProvider
  .state('grumbleIndex', {
    url: '/grumbles',
    templateUrl: 'js/grumbles/index.html',
    controller: 'GrumbleIndexController',
    controllerAs: 'vm'
  })
  .state('grumbleNew', {
    url: '/grumbles/new',
    templateUrl: 'js/grumbles/new.html',
    controller: 'GrumbleNewController',
    controllerAs: 'vm'
  })
  .state('grumbleShow', {
    url: '/grumbles/:id',
    templateUrl: 'js/grumbles/show.html',
    controller: 'GrumbleShowController',
    controllerAs: 'vm'
  })
  .state('grumbleEdit', {
    url: '/grumbles/:id/edit',
    templateUrl: 'js/grumbles/edit.html',
    controller: 'GrumbleEditController',
    controllerAs: 'vm'
  })
}
