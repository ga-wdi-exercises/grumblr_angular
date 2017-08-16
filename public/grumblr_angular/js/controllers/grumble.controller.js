angular
  .module('grumblr')
  .controller('GrumbleIndexController', [
    'Grumble',
    GrumbleIndexControllerFunction
  ])
  .controller('GrumbleShowController', [
    'Grumble',
    '$stateParams',
    GrumbleShowControllerFunction
  ])

  function GrumbleIndexControllerFunction (Grumble) {
    this.grumbles = Grumble.query()
  }

  function GrumbleShowControllerFunction (Grumble, $stateParams) {
    this.grumble = Grumble.get({ id: $stateParams.id })
  }
