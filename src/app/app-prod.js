(function (angular) {
	'use strict';

	var MODULE_NAME = 'admin.application.prod';

	angular.module(MODULE_NAME, [
		'admin.application'
	]);

	angular.element(document).ready( function() {
    angular.bootstrap(document, [MODULE_NAME]);
  });

}(angular));
