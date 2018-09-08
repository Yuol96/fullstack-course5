(function (){
"use strict";

angular.module("NarrowItDownApp", [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var ndc = this;

	ndc.searchTerm = "";
	ndc.getItems = function() {
		if(ndc.searchTerm){
			$(".error").css("display","none");

			var promise = MenuSearchService.getMatchedMenuItems(ndc.searchTerm);
			promise.then(function(data){
				ndc.found = data;
				console.log(ndc.found);
				if(ndc.found.length===0) {
					$(".error").css("display","block");
				}
			});
		}
		else {
			$(".error").css("display","block");
		}
		
	};

	ndc.removeItem = function(index) {
		ndc.found.splice(index,1);
	};

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function(response){
			var foundItems = [];
			var items = response.data.menu_items;
			for(var i in items){
				var item = items[i];
				if(item.description.toLowerCase().indexOf(searchTerm) !== -1){
					foundItems.push(item);
				}
			}
			return foundItems;
		}).catch(function(error){ console.log(error); });
	};
}

function foundItemsDirective() {
	var ddo = {
		templateUrl: "loader/itemsloaderindicator.template.html",
		scope:{
			ilist: '<',
			onRemove: '&'
		},
		controller: directiveController,
		controllerAs: 'list',
		bindToController: true,
		transclude: true
		// link: linkFunc
	};

	return ddo;
}

function directiveController() {
	var list = this;

	list.title = "HIHIHI";

}

})();











