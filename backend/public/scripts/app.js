function setConfig ($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',{
		controller: 'homeController',
		templateUrl: './views/home.html',
		activetab: '/'
	})
	.when('/contact', {
    controller: 'contactController',
    templateUrl: './views/contact.html',
    activetab: '/contact'
  	})
  	.when('/guitars', {
  		controller:"guitarController",
  		templateUrl:'./views/guitars.html',
  		activetab:'/guitars'
  	})
	.when('/guitars/:guitarId',{
		controller: 'guitarIdController',
		templateUrl: './views/showGuitar.html',
		activetab: '/guitars'
	})
	.when('/aboutUs',{
		controller: 'mapController',
		templateUrl: './views/aboutUs.html',
		activetab: '/aboutUs'
	})
	.when('/news',{
		controller: 'newsController',
		templateUrl: "./views/news.html",
		activetab: '/news'
	})
	.otherwise({
        redirectTo: "/"
    });
};

(function () {
	var app = angular.module('myApp', ['ngRoute', 'ngMap', 'myApp.controllers', 'myApp.directives']); //'ngMapHilight', 'angular-maphilight'
	app.config(['$locationProvider', '$routeProvider', setConfig]);
})();