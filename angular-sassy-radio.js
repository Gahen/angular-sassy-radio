'use strict';

angular.module('sassyRadio', [])
	.directive('sassyRadio', function() {
		return {
			scope: {
				ngModel: '='
			},
			restrict: 'AE',
			templateUrl: 'sassy-radio.html',
			transclude: true,
			require: '^ngModel',
			link: function(scope, iElement, iAttrs, ngModelController) {
				scope.checked = ngModelController.$viewValue;
				scope.borderColor = scope.borderColor || '#000';
				ngModelController.$render = function() {
					scope.checked = ngModelController.$viewValue;
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

