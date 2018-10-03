(function(){
'use strict';

angular.module('MenuApp')
.controller('categoryController', categoryController);

categoryController.$inject = ['MenuDataService', 'categories'];
function categoryController(MenuDataService, categories) {
    var $ctrl = this;

    $ctrl.categories = categories;
    console.log(categories);
}


})();