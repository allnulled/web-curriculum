angular
	.module("SimpleNavMenu", [])
	.directive("navMenu", [
		function() {
			return {
				restrict: "EA",
				transclude: "template",
				scope: {
					parentScope: "="
				},
				link: function($scope, $element, $attributes, $controller) {
					// @okay
					$controller.isActivated = false;
					$controller.parentScope = $scope.parentScope;
					$controller.selfScope = $scope;
					$scope.$on("navButtonClicked", function($event, forceStatus = false) {
						if (typeof forceStatus === "string") {
							switch (forceStatus) {
								case "show":
									$controller.isActivated = true;
									break;
								case "hide":
									$controller.isActivated = false;
									break;
								default:
									$controller.isActivated = !$controller.isActivated;
									break;
							}
						} else {
							$controller.isActivated = !$controller.isActivated;
						}
						$scope.$apply();
					});
				},
				controllerAs: "navMenuCtrl",
				controller: function() {},
				replace: true,
				template: function() {
					return `<div ng-class="{activated:navMenuCtrl.isActivated}" class="nav-menu--inner--api" ng-transclude></div>`;
				}
			};
		}
	])
	.directive("navItem", [
		function() {
			return {
				restrict: "EA",
				transclude: true,
				controller: function() {},
				replace: true,
				template: `<div ng-transclude></div>`,
				link: function($scope, $element, $attributes, $controller) {
					$element.bind("click", () => {
						$scope.$emit("navButtonClicked");
					});
				}
			};
		}
	])
	.directive("navButton", [
		function() {
			return {
				restrict: "EA",
				transclude: true,
				controller: function() {},
				replace: true,
				template: `<div ng-transclude></div>`,
				link: function($scope, $element, $attributes) {
					$element.bind("click", () => {
						$scope.$broadcast("navButtonClicked");
					});
				}
			};
		}
	]);
