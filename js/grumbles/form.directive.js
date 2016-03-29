(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm', function(){
    return {
      templateUrl: 'js/grumbles/_grumble_form.html',
      replace: true,
      scope: {
        grumble: '='
      }
    }
  });
})();
