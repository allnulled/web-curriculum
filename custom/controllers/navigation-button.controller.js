angular.module("CVApp").controller("NavigationButtonController", ["$scope",
		function($scope) {
				this.state = "closed";
				$scope.$on("navButtonClicked", function() {
						this.state = this.state === "opened" ? "closed" : "opened";
				});
		}
]);