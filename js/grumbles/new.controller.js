(function() {
    "use strict";

    angular
    .module("grumbles")
    .controller("GrumbleNewController", [
        "GrumbleFactory",
        GrumbleNewControllerFunction
    ]);

    function GrumbleNewControllerFunction(GrumbleFactory) {
        this.grumble = new GrumbleFactory();
        this.create = function() {
            this.grumble.$save();
        };
    }
})();
