angular.module("CVApp").controller("TranslatorController", ["$scope", function($scope) {
	this.options = [{
		iso: "ca",
		src: "resources/flag-ca.png",
		name: "Català"
	},{
		iso: "es",
		src: "resources/flag-es.png",
		name: "Español"
	},{
		iso: "en",
		src: "resources/flag-en.png",
		name: "English"
	}];
	this.config = {
		valueField: 'iso',
    labelField: 'name',
    searchField: 'name',
    maxItems: 1,
    create: false,
		render: {
			option: function(data, escape) {
				return `
					<table class="language-option">
						<tr>
							<td class="language-option-icon-cell">
								<img class="language-option-icon" src="${data.src}" />
							</td>
							<td class="language-option-label-cell">
								<div class="language-option-label">${data.name}</div>
							</td>
						</tr>
					</table>`;
			}
		}
	};
}]);