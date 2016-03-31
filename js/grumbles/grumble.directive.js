(function(){
  angular
  .module('grumbles')
  .directive('myCustomDirective', function(){
    return {
      template: '<h1>Hi there, {{myName}}! {{someAttribute}}</h1>',
      scope: {
        someAttribute: '@'
      },
      link: function(scope){
        scope.myName = 'Slim Shady';
      }
    }
  });
})();
