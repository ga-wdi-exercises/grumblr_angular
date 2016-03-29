(function() {
    "use strict";

    angular
    .module("grumbler")
    .controller("GrumbleShowController", [
        "GrumbleFactory",
        "$stateParams",
        GrumbleShowControllerFunction
    ]);
    function GrumbleShowControllerFunction(GrumbleFactory, $stateParams) {
        this.grumble = GrumbleFactory.get({id: $stateParams.id});
    }
})();
