function headerDirective() {
	return{
		restrict: 'A',
		templateUrl: './views/header.html'
	}
};

function headerSectionDirective(){
	return{
		restrict: 'A',
		templateUrl: './views/headerSection.html'
	}
};

function guitarDirective(){
	return{
		restrict: 'E',
		templateUrl: '/views/guitarId.html'
	}
};

function footerDirective() {
	return{
		restrict: 'A',
		templateUrl: './views/footer.html'
	}
};

(function(){
	var dir = angular.module('myApp.directives', []);
	dir.directive('headerDirective', headerDirective);
	dir.directive('headerSectionDirective', headerSectionDirective);
	dir.directive('footerDirective', footerDirective);
	dir.directive('guitarDirective', guitarDirective);
})();