angular
  .module('grumblr', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    Router
  ])
  .controller('GrumbleIndexController', [
    GrumbleIndexControllerFunction
  ])
  .controller('GrumbleShowController', [
    '$stateParams',
    GrumbleShowControllerFunction
  ])

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

  function GrumbleIndexControllerFunction () {
    this.grumbles = grumbles
  }

  function GrumbleShowControllerFunction ($stateParams) {
    this.grumble = grumbles[$stateParams.id]
  }
