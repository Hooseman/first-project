angular.module('miniRouting',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.when('','/')
  $urlRouterProvider.otherwise('/404')
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl:'home/home.html',
    controller: 'homeCtrl'
  })
  .state('settings',{
    url:'/settings',
    templateUrl:'settings/settings.html',
    controller: 'settingsCtrl'
  })
  .state('products',{
    url:'/products/:id',
    templateUrl:'products/products.html',
    controller: 'productsCtrl'
  })
  .state('404',{
    url:'/404',
    template: 'Nothing here'
  })
})
