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

  function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state('grumbleIndex', {
        url: '/grumbles',
        controller: 'GrumbleIndexController',
        controllerAs: 'vm',
        templateUrl: 'grumblr_angular/js/ng-views/index.html'
      })
      .state('grumbleShow', {
        url: '/grumbles/:id',
        controller: 'GrumbleShowController',
        controllerAs: 'vm',
        templateUrl: 'grumblr_angular/js/ng-views/show.html'
      })
    $urlRouterProvider.otherwise('/grumbles')
  }
