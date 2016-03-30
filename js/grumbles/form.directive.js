(function(){
  angular
  .module("grumbles")
.directive('grumbleForm',[
  '$state',
  'GrumbleFactory',
  '$stateParams',
  function($state, Grumble, $stateParams){
    return {
      templateUrl: 'js/grumbles/_grumble_form.html',
      replace: true,
      scope: {
        grumble: '=',
        formType: '@'
      },
      link: function(scope){
        scope.update = function(){
          scope.grumble.$update({id: $stateParams.id})
        }
        scope.create = function(){
          scope.grumble.$save(scope.grumble, function(grumble){
            $state.go('grumbleShow',grumble);
          })
        }
      }
    }
  }]);
})();
