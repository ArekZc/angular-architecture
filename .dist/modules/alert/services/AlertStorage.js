(function () {

  var MODULE_NAME = 'arekjs.alert';

  /**
   * @namespace arekjs.alert
   *
   * @name AlertStorage
   * @description View model for alert directive
   *
   * @constructor
   *
   * @author Arek Zając <arekzc@gmail.com>
   */
  function AlertStorage() {

    var $this = this;

    var indicator = 0;

    this.collection = {};

    /**
     * Returns all alerts objects
     *
     * @returns {Object}
     */
    this.getAlerts = function getAlerts() {
      return $this.collection;
    };

    /**
     * Returns specific alert object
     *
     * @param {String} id
     */
    this.getAlert = function getAlert(id) {
      return $this.collection[id];
    };

    /**
     * Add alert to collection
     *
     * @param {String} type
     * @param {String} message
     */
    this.add = function add(type, message) {

      $this.collection[indicator] = {
        type: type,
        message: message
      };

      return indicator++;
    };

    /**
     * Remove alert from collection
     *
     * @param {Number} id
     */
    this.remove = function remove(id) {

      if ($this.collection[id] !== undefined) {
        delete $this.collection[id];

        return true;
      }

      return false;
    };

    /**
     * Remove all alerts from collection
     */
    this.clean = function clean() {
      $this.collection = [];
    };
  }

  angular
    .module(MODULE_NAME)
    .factory(MODULE_NAME + '.alertStorage', function () {

      return new AlertStorage();
    });
}());
