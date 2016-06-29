var ENDPOINT = "data/content.json";
var NEWS = "data/news.json";

var findGuitar = function(array, id){
  for (var i = 0, m = null; i <= array.length; i++){
    if (array[i].id == id) {
      return array[i];
        break;
    };
  };
};

function homeController($scope, $route, $http){
	$scope.$route = $route;
	$http.get(NEWS).then(function(res){
		$scope.news = res.data
	});
};

function backTo(){
	location.href="/";
};

function contactController($scope, $route){
	$scope.$route = $route;
	$scope.contact = {};
	$scope.update = function(){
		console.log($scope.contact);
	};
	$scope.submit = function(){
		var contact = $('form');
		//$('.modal').toggleClass('is-active');
		contact.html("<p class='formValidated'>Tu formulario se ha enviado correctamente</p>" + "<button class='button button2 is-inverted' onclick='backTo()'>Vuelve a la página principal</button>");
	}
};

function guitarController($scope, $route, $http){
	$scope.$route = $route;
	$http.get(ENDPOINT).then(function(res){
		$scope.guitars = res.data
	});
};

function guitarIdController ($scope, $route, $routeParams, $http) {
	$scope.$route = $route;
	$scope.guitar_Id = $routeParams.guitarId;
	$http.get(ENDPOINT).then(function(res){
		var guitars = res.data;
		$scope.guitar =findGuitar(guitars, $scope.guitar_Id);
	});
};

function mapController($scope, $route) {
	$scope.$route = $route;
};

function newsController($scope, $route, $http) {
	$scope.$route = $route;
	$http.get(NEWS).then(function(res){
		$scope.news = res.data
	});
};

(function() {
	var ctrl = angular.module('myApp.controllers', []);
	ctrl.controller('homeController', homeController);
	ctrl.controller('contactController', contactController);
	ctrl.controller('guitarController', guitarController);
	ctrl.controller('mapController', mapController);
	ctrl.controller('newsController', newsController);
	ctrl.controller('guitarIdController', guitarIdController);
})();