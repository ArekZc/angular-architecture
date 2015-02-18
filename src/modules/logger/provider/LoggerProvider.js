(function (angular) {
    'use strict';

    var MODULE_NAME = 'arekjs.logger';

    /**
     * @name LoggerProvider
     * @description Configuration provider for logger service
     *
     * @constructor
     *
     * @author Arek Zając <arekzc@gmail.com>
     */
    function LoggerProvider() {

        var $this = this;

        /**
         * Define if log will be displayed in console
         *
         * @type {boolean}
         */
        this.debug = false;

        /**
         * @description Collection of logger handlers
         *
         * @type {Array}
         */
        this.handlerCollection = [];

        /**
         * @description Add handler to collection
         *
         * @param {Object} handler
         */
        this.addHandler = function (handler) {
            $this.handlerCollection.push(handler);
        };

        this.$get = function () {
            return this;
        };
    }

    LoggerProvider.$inject = [];

    angular
        .module(MODULE_NAME)
        .provider(MODULE_NAME + '.logger', LoggerProvider);

}(angular));
