(function (angular) {
    'use strict';

    var MODULE_NAME = 'arekjs.logger';

    /**
     * @name Logger
     * @description Service to log into browser console
     *
     * @param {$log} $log
     * @param {LoggerProvider} provider
     * @constructor
     *
     * @author Arek Zając <arekzc@gmail.com>
     */
    function Logger($log, provider) {

        var $this = this;

        /**
         * @readonly
         * @type {number}
         */
        this.DEBUG_LEVEL = 200;

        /**
         * @readonly
         * @type {number}
         */
        this.INFO_LEVEL = 250;

        /**
         * @readonly
         * @type {number}
         */
        this.WARNING_LEVEL = 30;

        /**
         * @readonly
         * @type {number}
         */
        this.ERROR_LEVEL = 350;

        /**
         * Log with debug level
         *
         * @param {string} message
         */
        this.debug = function debug(message) {

        };

        /**
         * Log with info level
         *
         * @param {string} message
         */
        this.info = function info(message) {

        };

        /**
         * Log with warning level
         *
         * @param {string} message
         */
        this.warning = function warning(message) {

        };

        /**
         * Log with error level
         *
         * @param {string} message
         */
        this.error = function error(message) {

        };

        /**
         *
         * @param {number} level
         * @param {string} message
         */
        function log(level, message) {

        }
    }

    Logger.$inject = [
        '$log',
        MODULE_NAME + '.loggerProvider'
    ];

    angular
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.logger', Logger);

}(angular));
