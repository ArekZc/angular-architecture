(function (angular) {
	'use strict';

	var MODULE_NAME = 'admin.application.dev';
	
	angular.module(MODULE_NAME, [
		'admin.application'
	])
	.config([
		function () {
			
		}
	]);
	
  angular.element(document).ready( function() {
    angular.bootstrap(document, [MODULE_NAME]);
  });
	
}(angular));