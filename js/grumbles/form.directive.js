(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: {{grumble.name}},
      link: function(){
        console.log('directive used')
      }
    }
  });
})();
