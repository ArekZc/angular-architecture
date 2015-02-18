(function (angular) {
    'use strict';

    var MODULE_NAME = 'application.contact';

    /**
     * @name ContactController
     * @description Controller for contact view
     *
     * @constructor
     *
     * @author Arek Zając <arekzc@gmail.com>
     */
    function ContactController() {



    }

    ContactController.$inject = [];

    angular
        .module(MODULE_NAME)
        .controller(MODULE_NAME + '.contactController', ContactController);

}(angular));
