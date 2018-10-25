angular.module("CVApp").controller("HomeController", ["$scope", "$rootScope", "$timeout", "$translate", function($scope, $rootScope, $timeout, $translate) {
		const ctrl = this;
		ctrl.carousel = {
				running: false,
				playing: true,
				items: [],
				config: {
						enabled: true,
						autoplay: true,
						dots: true,
						draggable: true,
						autoplaySpeed: 3000,
						method: {},
						event: {
								beforeChange: function(event, slick, currentSlide, nextSlide) {},
								afterChange: function(event, slick, currentSlide, nextSlide) {}
						}
				}
		};
		const reinitialize = function(event, current, previous) {
				ctrl.carousel.running = false;
				$timeout(function() {
						$translate([
								"Los animales me caen bien",
								"El deporte es importante",
								"Programemos nuestro futuro",
						]).then(function(results) {
								ctrl.carousel.items = [{
										text: results["Programemos nuestro futuro"],
										image: "resources/slide-code.jpg"
								}, {
										text: results["Los animales me caen bien"],
										image: "resources/slide-animals.jpg"
								}, {
										text: results["El deporte es importante"],
										image: "resources/slide-sport.jpg"
								}];
								ctrl.carousel.running = true;
								//$scope.$apply();
						});
				});
		};
		$rootScope.$on("$translateChangeSuccess", reinitialize);
		reinitialize();
}]);