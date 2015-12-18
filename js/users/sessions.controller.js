(function(){
  angular
    .module("grumblr")
    .controller("SessionsController", function($auth, $state){
      this.signinForm = {};

      this.signin = function() {
        $auth.submitLogin(this.signinForm)
        .then(function(resp) {
          $state.go('grumbleIndex');
        })
        .catch(function(resp) {
          console.log("Signin failure:", resp);
        });
      };

    });
})();
