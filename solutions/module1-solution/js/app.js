// (function(){
// 'use strict';

// angular.module('LunchCheck',[])
// .controller('LunchCheckController', LunchCheckController);

// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController($scope) {
// 	$scope.lunchstr = "";
// 	$scope.message = "";

// 	$scope.showMessage = function() {
// 		if($scope.lunchstr){
// 			var lst = parseLunchStr($scope.lunchstr);
// 			if (lst.length<=3) {
// 				$scope.message = "Enjoy!";
// 			}
// 			else {
// 				$scope.message = "Too much!";
// 			}
// 		}
// 		else {
// 			$scope.message = "Please enter data first";
// 		}
// 	}

// 	function parseLunchStr(str) {
// 		return str.split(',');
// 	}
// }

// }) ();

!function(){"use strict";function e(e){e.lunchstr="",e.message="",e.showMessage=function(){e.lunchstr?e.lunchstr.split(",").length<=3?e.message="Enjoy!":e.message="Too much!":e.message="Please enter data first"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();