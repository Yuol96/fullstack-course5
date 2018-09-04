// (function(){
// 'use strict';

// angular.module('ShoppingListCheckOff', [])
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController.$inject = ['ShoppingListCheckOffService'];
// function ToBuyController(ShoppingListCheckOffService) {
// 	var tbc = this;

// 	tbc.tobuy = ShoppingListCheckOffService.getToBuy();
// 	tbc.boughtItem = function(idx) {
// 		ShoppingListCheckOffService.boughtItem(idx);
// 	}
// }

// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
// function AlreadyBoughtController(ShoppingListCheckOffService) {
// 	var abc = this;

// 	abc.bought = ShoppingListCheckOffService.getAlreadyBought();
// }

// function ShoppingListCheckOffService() {
// 	var service = this;

// 	var tobuy = [
// 		{
// 			name: "cookies",
// 			quantity: 10
// 		},
// 		{
// 			name: "apple",
// 			quantity: 5
// 		},
// 		{
// 			name: "banana",
// 			quantity: 15
// 		},
// 		{
// 			name: "beef",
// 			quantity: 6
// 		},
// 		{
// 			name: "chicken",
// 			quantity: 6
// 		},
// 		{
// 			name: "bottle",
// 			quantity: 1
// 		},
// 	];
// 	var bought = [];

// 	service.boughtItem = function (idx) {
// 		bought.push(tobuy[idx]);
// 		tobuy.splice(idx,1);
// 	}

// 	service.getToBuy = function() {
// 		return tobuy;
// 	}
// 	service.getAlreadyBought = function () {
// 		return bought;
// 	}
// }


// })();

!function(){"use strict";function t(t){this.tobuy=t.getToBuy(),this.boughtItem=function(e){t.boughtItem(e)}}function e(t){this.bought=t.getAlreadyBought()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",function(){var t=this,e=[{name:"cookies",quantity:10},{name:"apple",quantity:5},{name:"banana",quantity:15},{name:"beef",quantity:6},{name:"chicken",quantity:6},{name:"bottle",quantity:1}],n=[];t.boughtItem=function(t){n.push(e[t]),e.splice(t,1)},t.getToBuy=function(){return e},t.getAlreadyBought=function(){return n}}),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();









