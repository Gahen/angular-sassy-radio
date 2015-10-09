'use strict';

angular.module('sassyRadio', [])
	.directive('sassyRadio', function() {
		return {
			scope: {
				borderColor: '@',
				ngModel: '=',
				transclude: true
			},
			restrict: 'AE',
			templateUrl: 'sassy-radio.html',
			link: function(scope, iElement, iAttrs, ngModelController) {
				scope.checked = scope.ngModel.$viewValue;
				scope.borderColor = scope.borderColor || '#000';
				ngModelController.$render = function() {
					iElement.find('div').text(ngModelController.$viewValue);
				};

				scope.updateModel = function(state) {
					scope.checked = state;
					// call $parsers pipeline then update $modelValue
					ngModelController.$setViewValue(state);
					// update the local view
					ngModelController.$render();
				};

			}

		};
	});

