

angular.module("grumblr", ["ui.router"])
  .config(["$stateProvider", Router])
  .controller("GrumbleIndexController", [GrumbleIndexController
  ])
  .controller("GrumbleShowController", ["$stateParams",
  GrumbleShowControllerFunction
  ]);

  function GrumbleIndexController() {
    console.log("I'm the contorller")
    this.grumbles = grumbles;
  }
  function Router($stateProvider) {
    console.log('working');
  }

  function GrumbleShowControllerFunction($stateParams){
    console.log($stateParams);
    this.grumble = grumbles[$stateParams.id];
  }

  function Router($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
    url: "/grumbles",
    controller: "GrumbleIndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
    })
    .state("grumbleShow", {
    url: "/grumbles/:id",
    controller: "GrumbleShowController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/show.html"
   });
}
