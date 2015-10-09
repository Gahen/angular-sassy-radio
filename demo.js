'use strict';

angular.module('sassyRadio', [])
	.config(_.noop)
	.run(_.noop)
	.controller('DemoCtrl', function($scope) {
		$scope.value = true;
	});
