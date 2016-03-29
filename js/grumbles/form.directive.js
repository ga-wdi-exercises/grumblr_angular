(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm',[
    '$state',
    'GrumbleFactory',
    function($state, Grumble){
      return {
        templateUrl: 'js/grumbles/_grumble_form.html',
        replace: true,
        scope: {
          grumble: '=',
          formType: '@'
        },
        link: function(scope){
          scope.create = function(){
            scope.grumble.$save(scope.grumble, function(grumble) {
              $state.go('grumbleShow', grumble);
            });
          }
        }
      }
    }]
  );
})();
