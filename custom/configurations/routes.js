angular.module("CVApp").config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
		$routeProvider
				.when("/", {
					templateUrl: "custom/templates/home.tmpl.html"
				})
				.when("/code", {
					templateUrl: "custom/templates/code.tmpl.html"
				})
				.when("/experience", {
					templateUrl: "custom/templates/experience.tmpl.html"
				})
				.when("/goals", {
					templateUrl: "custom/templates/goals.tmpl.html"
				})
				.when("/contact", {
					templateUrl: "custom/templates/contact.tmpl.html"
				})
				.otherwise("/");

		// configure html5 to get links working on jsfiddle
		$locationProvider.hashPrefix("");
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
}]);