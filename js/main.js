var app = angular.module('Main', []);
app.directive('copyToClipboard', function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			elem.click(function () {
				if (attrs.copyToClipboard) {
					var $temp_input = $("<input>");
					$("body").append($temp_input);
					$temp_input.val(attrs.copyToClipboard).select();
					document.execCommand("copy");
					$temp_input.remove();
				}
			});
		}
	};
});
app.controller('MainController', function ($scope) {

	$scope.business_units = ['CPS', 'OPEN'];
	$scope.products = ['PLAT', 'BBC'];
	$scope.treatment_types = ['AutoPay', 'BenefitAwareness'];
	$scope.launch_mqs = [
		'Q1', 'Q2', 'Q3', 'Q4',
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$scope.incentive_units = ['MR', 'SC', 'Miles', 'APR', 'BAU', 'THC'];
	$scope.launch_years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
	$scope.pages = ['ACCTHUB', 'Activity'];
	$scope.placements = ['BigPitch', 'Interstitial'];
	$scope.channels = ['Mobile', 'Web'];

	$scope.target_bu = '';
	$scope.product = '';
	$scope.treatment_type = '';
	$scope.incentive_value = '';
	$scope.incentive_unit = '';
	$scope.launch_mq = '';
	$scope.launch_year = '';
	$scope.channel = '';
	$scope.page = '';
	$scope.placement = '';
	$scope.icmv = '';
	$scope.icmv_sm = '';
	$scope.response = '';
	$scope.response_sm = '';
	$scope.misc = '';
	$scope.prefix = '';

	$scope.init = function () {
	}

	$scope.get_offer_id = function () {
		return $scope.prefix + ':' +
			$scope.target_bu + ':' +
			$scope.product + ':' +
			$scope.treatment_type + ':' +
			$scope.incentive_value + ':' +
			$scope.incentive_unit + ':' +
			$scope.launch_mq + ':' +
			$scope.launch_year + ':' +
			$scope.channel + ':' +
			$scope.page + ':' +
			$scope.placement + ':' +
			$scope.icmv + ':' +
			$scope.icmv_sm + ':' +
			$scope.response + ':' +
			$scope.response_sm + ':' +
			$scope.misc;
	}
});