var app = angular.module('myAppRouter',['ui.router'])
.config(["$stateProvider", Router])
function Router($stateProvider){
    console.log('Working')
}
