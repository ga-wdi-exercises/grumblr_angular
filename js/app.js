angular
  .module('grumblr', [
    'ui.router',
    'ngResource'
  ])
  .config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    Router
  ])
  .factory('Grumble', [
    '$resource',
    Grumble
  ])
  .controller('GrumbleIndexController', [
    'Grumble',
    GrumbleIndexControllerFunction
  ])
  .controller('GrumbleShowController', [
    'Grumble',
    '$stateParams',
    GrumbleShowControllerFunction
  ])

  function Grumble ($resource) {
    return $resource('http://localhost:3000/grumbles/:id', {}, {
      update: { method: 'PUT' }
    })
  }

  function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true)
    $stateProvider
      .state('grumbleIndex', {
        url: '/grumbles',
        controller: 'GrumbleIndexController',
        controllerAs: 'vm',
        templateUrl: 'js/ng-views/index.html'
      })
      .state('grumbleShow', {
        url: '/grumbles/:id',
        controller: 'GrumbleShowController',
        controllerAs: 'vm',
        templateUrl: 'js/ng-views/show.html'
      })
    $urlRouterProvider.otherwise('/grumbles')
  }

  function GrumbleIndexControllerFunction (Grumble) {
    this.grumbles = Grumble.query()
  }

  function GrumbleShowControllerFunction (Grumble, $stateParams) {
    this.grumble = Grumble.get({ id: $stateParams.id })
  }
