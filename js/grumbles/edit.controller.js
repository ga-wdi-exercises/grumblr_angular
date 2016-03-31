(function() {
    "use strict";

    angular
        .module("grumbles")
        .controller("GrumbleEditController", [
            "GrumbleFactory",
            GrumbleEditControllerFunction
        ]);

    function GrumbleEditControllerFunction(GrumbleFactory) {
        this.grumble = GrumbleFactory.get({id: $stateParams.id});
        this.update = function() {
            this.grumble.$update();
        };
    }
})();
