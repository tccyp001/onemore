'use strict';

app.controller('shoppingcartCtrl', function($scope, $cookies) {
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
		return obj;
	}
	
	var putShoppingCartToCookie = function() {
		var serializeValue = JSON.stringify($scope.shoppingCart);
	
		$cookies.putObject('shoppingCart', $scope.shoppingCart)
	}
	
	$scope.shoppingCart = getShoppingCartFromCookie();
	if(!$scope.shoppingCart || $scope.shoppingCart.length==0){
		$scope.shoppingCart.push({id: 'product1', name:'aaa', price:100, imgSrc : 'newImages/item.jpg', qty:2});
		$scope.shoppingCart.push({id: 'product2', name:'bbb', price:200, imgSrc : 'newImages/item.jpg', qty:3});
	} 
	putShoppingCartToCookie();
	
	$scope.getTotal = function(){
		return 1000;
	};
});