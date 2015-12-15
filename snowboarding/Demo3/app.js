'use strict';

// Declare app level module which depends on views, and components
var app= angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngCookies',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product1', {
    templateUrl: 'product1/product1.html',
    controller: 'Product1Ctrl'
  });
   $routeProvider.when('/shoppingcart', {
    templateUrl: 'shoppingcart/shoppingcart.html',
    controller: 'shoppingcartCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/product1'});
}]);


app.controller('AppCtrl', function($scope, $mdSidenav, $cookies) {


		

});