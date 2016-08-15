var app = angular.module('myAppRouter',['ui.router'])
.config(["$stateProvider", Router])
function Router($stateProvider){
    console.log('Working')
    $stateProvider
    .state("grumbleIndex", {
        url:"/grumbles",
        controller: "GrumbleIndexController",
        controllerAs:"GrumbleIndexViewModel",
        templateUrl: "app/components/grumbles/grumbleView.html"
    });
}
