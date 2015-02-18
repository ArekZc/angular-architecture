(function (angular) {
    'use strict';

    var MODULE_NAME = 'application.module.prototype';

    function PrototypeProvider() {

    }

    PrototypeProvider.$inject = [];

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME + '.$prototype', PrototypeProvider);

}(angular));
