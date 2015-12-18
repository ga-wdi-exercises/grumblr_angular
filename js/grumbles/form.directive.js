(function(){
  angular
  .module('grumbles')
  .directive('grumbleForm', function(){
    return {
      templateUrl: 'js/grumbles/_grumble_show.html',
      replace: true,
      scope: {
        grumble: '='
      }
    }
  });
})();
