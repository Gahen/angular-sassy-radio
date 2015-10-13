'use strict';

angular.module('templates', []);
angular.module('demoApp', ['sassyRadio'])
	.controller('DemoCtrl', function($scope) {
		$scope.value = false;
	});
