(function (angular) {
    'use strict';

    var MODULE_NAME = 'application.module.prototype';

    function PrototypeResource() {

    }

    angular
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.prototypeResource', PrototypeResource);

}(angular));
