(function (angular) {

  var MODULE_NAME = 'arekjs.alert';

  /**
   * @namespace arekjs.alert
   *
   * @name AlertComponent
   * @description View model for alert directive
   *
   * @param {AlertStorage} storage
   * @param {Object} settings
   * @constructor
   */
  function AlertComponent(storage, settings) {

    var $this = this;

    this.settings = (this.settings === undefined)
      ? settings
      : angular.extend(this.settings, settings);

    this.element = null;

    this.getAlerts = function getAlerts() {
      return storage.getAlerts();
    };

    this.removeAlert = function removeAlert(id) {
      return storage.remove(id);
    };

    /**
     * Bind dom element to component class
     *
     * @param {*} element
     */
    this.setElement = function setElement(element) {
      $this.element = element;
    }
  }

  angular
    .module(MODULE_NAME)
    .factory(MODULE_NAME + '.alertComponent', [

      MODULE_NAME + '.$alert',
      MODULE_NAME + '.Alert',

      function (provider, Alert) {

        return new AlertComponent(Alert.getStorage(),provider.settings);
      }
    ]);

}(angular));