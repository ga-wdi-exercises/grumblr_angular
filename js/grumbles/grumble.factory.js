(function() {
	angular
		.module("grumbles")
		.factory("GrumbleFactory", [
			"$resource",
			GrumbleFactoryFunction
		]);

		function GrumbleFactoryFunction($resource) {
			return $resource("http://localhost:3000/grumbles/:id", {}, {
				update: { method: "PUT" }
			});
		}
}());