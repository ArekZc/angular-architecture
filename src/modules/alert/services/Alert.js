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

        /**
         * @type {AlertStorage}
         */
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
         * @param {String} id
         * @param {Array} params
         */
        this.success = function success(id, params) {
            addAlert($this.SUCCESS_TYPE, id, params);
        };

        /**
         * Add error type alert
         *
         * @param {String} id
         * @param {Array} params
         */
        this.error = function error(id, params) {
            addAlert($this.ERROR_TYPE, id, params);
        };

        /**
         * Add info type alert
         *
         * @param {String} id
         * @param {Array} params
         */
        this.info = function info(id, params) {
            addAlert($this.INFO_TYPE, id, params);
        };

        /**
         * Add alert to storage
         *
         * @param {String} type
         * @param {String} id
         * @param {Array} params
         */
        function addAlert(type, id, params) {
            $this.storage.add(type, id);
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
