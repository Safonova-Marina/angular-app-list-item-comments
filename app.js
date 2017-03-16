var app = angular.module('items', []);

app.controller('itemsCtrl', function($scope){

	$scope.showComBlock = false;
	$scope.saved = localStorage.getItem('items');
	$scope.items = (localStorage.getItem('items')!==null) ? JSON.parse($scope.saved) : [ 
		{text: 'First item with custom name', comments: [{cl: "even", text: 'Comment1-1'}, {cl: "odd", text: 'Comment1-2'}, {cl: "even", text: 'Comment1-3'}, {cl: "odd", text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}]},
		{text: 'Second item is active', comments: [{cl: "even", text: 'Comment2-1'}, {cl: "odd", text: 'Comment2-2'}, {cl: "even", text: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.'}]}
	];

	localStorage.setItem('items', JSON.stringify($scope.items));


	$scope.addItem = function() {
		$scope.items.push({
			text: $scope.newItem,
			comments: []
		});
		$scope.newItem = ''; 
		localStorage.setItem('items', JSON.stringify($scope.items));
	}

	$scope.delItem = function(index) {
		$scope.items.splice(index, 1);
	}

	$scope.showCom = function(index) {
		$scope.selItemIndex = index;
		$scope.selCom = $scope.items[index].comments;
		$scope.showComBlock = true;
	}

	$scope.addCom = function() {
		if ($scope.items[$scope.selItemIndex].comments.length%2 == 1) $scope.items[$scope.selItemIndex].comments.push({
				cl: "odd",
				text: $scope.newCom
			});
		else $scope.items[$scope.selItemIndex].comments.push({
				cl: "even",
				text: $scope.newCom
			});
		$scope.newCom = ''; 
		localStorage.setItem('items', JSON.stringify($scope.items));
	}

});