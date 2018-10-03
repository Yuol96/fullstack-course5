(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/homeView.html'
      })
    .state('categoryView', {
        url: '/categories',
        templateUrl: 'templates/categoryView.html',
        controller: 'categoryController as categoryController',
        resolve: {
            categories: ['MenuDataService', function(MenuDataService){
                return MenuDataService.getAllCategories();
            }]
        }
    })
    .state('itemView', {
        url: '/items/{shortName}',
        templateUrl: 'templates/itemView.html',
        controller: 'itemController as itemController',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.shortName)
            }]
        }
    })
    ;
}


})();