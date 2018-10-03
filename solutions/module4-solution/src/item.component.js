(function(){
'use strict';

angular.module('MenuApp')
.component('items', {
    templateUrl: 'templates/itemComponent.html',
    bindings: {
        itemList: '<'
    }
})


})();