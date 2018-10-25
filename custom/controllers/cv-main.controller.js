angular.module("CVApp").controller("CVMainController", ["$scope", "$translate",
		function($scope, $translate) {
				const ctrl = this;
				this.navigation = {
						state: "closed",
						page: 'home',
						setPage: function(newPage) {
								this.page = newPage;
								ctrl.navigation.toggleState();
						},
						toggleState: function() {
								ctrl.navigation.state = ctrl.navigation.state === "opened" ? "closed" : "opened";
						}
				};
				this.translator = $translate;
				this.language = $translate.use();
				$scope.$on("navButtonClicked", this.navigation.toggleState);
		}
]);