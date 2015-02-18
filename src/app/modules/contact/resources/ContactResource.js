(function (angular) {
    'use strict';

    /**
     * @readonly
     * @type {string}
     */
    var MODULE_NAME = 'application.contact';

    /**
     * @type {$http}
     */
    var http;

    /**
     * @name ContactResource
     * @description Http resource for contact entity
     *
     * @constructor
     *
     * @param {$http} $http
     *
     * @author Arek Zając <arekzc@gmail.com>
     */
    function ContactResource($http, $q) {
        http = $http;

        /**
         * @readonly
         * @type {string}
         */
        this.ROUTE = '/api/contact/:id';

        this.save = function save(req) {


        };
    }

    ContactResource.$inject = [
        '$http',
        '$q',
        ''
    ];

    angular
        .module(MODULE_NAME)
        .service(MODULE_NAME + '.contactResource', ContactResource);

}(angular));
