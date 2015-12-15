'use strict';

app.controller('Product1Ctrl', function($scope) {
	function buildToggler(navID) {
		  return function() {
			$mdSidenav(navID)
			  .toggle()
			  .then(function () {
				
			  });
		  }
		};
	$scope.toggleRight = buildToggler('right');
});