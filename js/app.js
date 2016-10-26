
  angular
  .module("grumblr", [
    "ui.router",
    "firebase"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("GrumbleIndexController", [
    "$firebaseArray",
    GrumbleIndexControllerFunction
  ])
  .controller("GrumbleShowController", [
    "$stateParams",
    "$firebaseObject",  // We are now using $firebaseObject, not $firebaseArray.
    GrumbleShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/ng-views/index.html",
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }

  function GrumbleIndexControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("grumbles");
    this.grumbles = $firebaseArray(ref);
    this.create = function(){
      this.grumbles.$add(this.newGrumble).then( () => this.newGrumble = {} )
    }

    // This method is triggered whenever the user clicks "Delete Grumble".
    // It takes a grumble as an argument.
    this.delete = function(grumble){
      this.grumbles.$remove(grumble)
    }
  }

  function GrumbleShowControllerFunction($stateParams, $firebaseObject){
    // This time, ref contains a reference to a specific grumble.
    let ref = firebase.database().ref().child("grumbles/" + $stateParams.id);

    // Then we retrieve a $firebaseObject based on ref. Once that asynchronous action is done, we save the resulting grumble to `vm.grumble`.
    $firebaseObject(ref).$loaded().then( grumble => this.grumble = grumble )

    // This method is triggered when the user clicks "Update Grumble".
    this.update = function(){
      this.grumble.$save();
    }
  }
