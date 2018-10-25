angular.module("CVApp").controller("ExperienceController", ["$scope", "$http", function($scope, $http) {
	const ctrl = this;
	ctrl.experiences = [];
	$http({
		method: "GET",
		url: "custom/data/professional-experience.json"
	}).then(function(response) {
		ctrl.experiences = response.data.experiences;
	});
}]);