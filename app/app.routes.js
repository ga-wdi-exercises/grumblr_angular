var app = angular.module('myAppRouter',['ui.router'])
.config([
    "$stateProvider",
    "$locationProvider",
    Router])
function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("grumbleIndex", {
        url:"/grumbles",
        controller: "GrumbleIndexController",
        controllerAs:"GrumbleIndexViewModel",
        templateUrl: "app/components/grumbles/grumbleView.html"
    })
    .state("grumbleShow", {
        url:"/grumbles/:id",
        controller:"GrumbleShowController",
        controllerAs:"GrumbleShowViewModel",
        templateUrl: "app/components/grumbles/grumbleShow.html"
    })
    .state("grumbleNew", {
        url:"/grumbles/new",
        controller:"GrumbleNewController",
        controllerAs:"GrumbleNewViewModel",
        templateUrl:"app/components/grumbles/grumbleNew.html"
    })
}
