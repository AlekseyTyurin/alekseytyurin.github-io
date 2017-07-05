

/* Controllers */

var wikiPinterestApp = angular.module('wiki', [ ]);

wikiPinterestApp.controller('WikiListController', ['$scope', '$http',
	function($scope, $http) {
	$http.get('assets/articles.json').success(function(data) {
		$scope.articles = data;
	});

	$scope.orderProp = 'age';
}]);