
(function (){
  angular
  .module("grumblr", [
    "ui.router"
  ]);
})();
.config([
   "$stateProvider",
   RouterFunction
 ]);


function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);{
  $stateProvider
  .state("grumbleIndex", {
    url: "/grumbles",
    templateUrl: "js/grumbles/index.html"
  })
  .state("grumbleShow", {
  url: "/grumbles/:id",
  templateUrl: "js/grumbles/show.html",
  controller: "GrumbleShowController",
  controllerAs: "GrumbleShowViewModel"
});
}
