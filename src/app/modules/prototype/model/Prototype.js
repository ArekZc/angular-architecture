(function (angular) {
    'use strict';

    var MODULE_NAME = 'application.module.prototype';

    angular
        .module(MODULE_NAME)
        .factory(MODULE_NAME + '.Prototype', function() {

            function Prototype() {

            }

            return Prototype;
        });

}(angular));
