(function (angular) {
    'use strict';

    var MODULE_NAME = 'application.module.prototype';

    /**
     * @name Service
     * @constructor
     */
    function Service() {

    }

    Service.$inject = [];

    angular
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.Service', Service);

}(angular));
