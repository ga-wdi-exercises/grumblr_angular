(function(){
  angular
    .module("grumblr")
    .controller("SessionsController", function($auth, $state, $scope){
      this.signinForm = {};
      this.signupForm = {};

      this.signin = function() {
        $auth.submitLogin(this.signinForm)
        .then(function(resp) {
          $state.go('grumbleIndex');
        })
        .catch(function(resp) {
          console.log("Signin failure:", resp);
        });
      };

      this.signup = function() {
        $auth.submitRegistration(this.signupForm)
        .then(function(resp) {
          $state.go('grumbleIndex');
        })
        .catch(function(resp) {
          console.log(resp);
        });
      };

      $scope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          if(toState.name == 'signout') {
            $auth.signOut();
          }
      });

    });
})();
