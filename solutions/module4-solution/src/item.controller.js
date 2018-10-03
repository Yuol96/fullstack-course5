(function(){
'use strict';

angular.module('MenuApp')
.controller('itemController', itemController);

itemController.$inject = ['MenuDataService', 'items'];
function itemController(MenuDataService, items) {
    var $ctrl = this;

    $ctrl.items = items;
    console.log(items);
}


})();