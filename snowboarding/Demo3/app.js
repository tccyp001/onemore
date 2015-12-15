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
  $routeProvider.otherwise({redirectTo: '/product1'});
}]);


app.controller('AppCtrl', function($scope, $mdSidenav, $cookies) {
	    $scope.firstName = "John";
		$scope.lastName = "Doe";
		$scope.toggleRight = buildToggler('right');
		$scope.shoppingCart = [];
		
		


		$scope.addChart = function(itemId){
			$scope.shoppingCart = getShoppingCartFromCookie();
			for(var i = 0;i<$scope.shoppingCart.length;i++){
				if($scope.shoppingCart[i].id == itemId) {
					$scope.shoppingCart[i].quantity +=1;
				}
			}
			putShoppingCartToCookie();
		}
		
		var getShoppingCartFromCookie = function(){
			var shoppingCartStr = $cookies.get('shoppingCart');
			
			var obj = {};
			if(shoppingCartStr) {
				obj = JSON.parse($cookies.get('shoppingCart'));
			}			
			//var shoppingCart = JSON.parse($cookies.get('shoppingCart'));
			return obj;
		}
		
		var putShoppingCartToCookie = function() {
			var serializeValue = JSON.stringify($scope.shoppingCart);
		
			$cookies.putObject('shoppingCart', $scope.shoppingCart)
		}
		function buildToggler(navID) {
		  return function() {
			$mdSidenav(navID)
			  .toggle()
			  .then(function () {
				
			  });
		  }
		}
		var obj = getShoppingCartFromCookie();
		if(!obj || obj.length==0){
			$scope.shoppingCart.push({id: 'product1', name:'aaa', price:100, imgSrc : 'newImages/item.jpg', quantity:2});
			$scope.shoppingCart.push({id: 'product2', name:'bbb', price:200, imgSrc : 'newImages/item.jpg', quantity:3});
		} 
		putShoppingCartToCookie();

});