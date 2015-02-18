(function (angular) {

    var MODULE_NAME = 'arekjs.alert';

    /**
     * @namespace arekjs.alert
     *
     * @name Alert
     * @description View model for alert directive
     *
     * @param {AlertStorage} storage
     * @param {AlertProvider} provider
     * @constructor
     */
    function Alert(storage, provider) {

        var $this = this;

        // Properties
        this.storage = storage;

        /**
         * @readonly
         * @type {string}
         */
        this.INFO_TYPE = 'INFO';

        /**
         * @readonly
         * @type {string}
         */
        this.ERROR_TYPE = 'ERROR';

        /**
         * @readonly
         * @type {string}
         */
        this.SUCCESS_TYPE = 'SUCCESS';

        /**
         * Add success type alert
         *
         * @param {String} message
         * @param {Array} params
         */
        this.success = function success(message, params) {
            addAlert($this.SUCCESS_TYPE, message, params);
        };

        /**
         * Add error type alert
         *
         * @param {String} message
         * @param {Array} params
         */
        this.error = function error(message, params) {
            addAlert($this.ERROR_TYPE, message, params);
        };

        /**
         * Add info type alert
         *
         * @param {String} message
         * @param {Array} params
         */
        this.info = function info(message, params) {
            addAlert($this.INFO_TYPE, message, params);
        };

        /**
         * Add alert
         *
         * @param {String} type
         * @param {String} message
         * @param {Array} params
         */
        function addAlert(type, message, params) {
            $this.storage.add(type, message);
        }

        /**
         * @returns {AlertStorage}
         */
        this.getStorage = function getStorage() {
            return $this.storage;
        };
    }

    Alert.$inject = [
        MODULE_NAME + '.alertStorage',
        MODULE_NAME + '.$alert'
    ];

    angular
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.alert', Alert);

}(angular));
