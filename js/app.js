'use strict';

(function(){
  angular.module('grumblr', [
    'ui.router',
    'grumbls'
  ])
  .config([
    '$stateProvider',
    '$locationProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state('grumblIndex', {
      url: '/grumbls',
      templateUrl: "js/grumbls/index.html",
      controller: 'GrumblIndexController',
      controllerAs: 'GrumblIndexViewModel'
    })
    .state('grumblShow', {
      url: '/grumbls/:id',
      templateUrl: "js/grumbls/show.html",
      controller: 'GrumblShowController',
      controllerAs: 'GrumblShowViewModel'
    });
  }


})();
