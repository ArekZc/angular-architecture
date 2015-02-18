(function (angular) {

  var MODULE_NAME = 'arekjs.alert';

  /**
   * @namespace arekjs.alert
   *
   * @name AlertProvider
   * @description View model for alert directive
   *
   * @constructor
   */
  function AlertProvider() {

    var $this = this;

    this.interval = 2000;

    this.messagePatterns = {};

    /**
     * @param {String} id
     * @param {String} pattern
     * @returns {AlertComponent}
     */
    this.addMessagePattern = function addMessagePattern(id, pattern) {

      if ($this.messagePatterns[id] !== undefined) {
        throw new Error('Pattern with provided id already exist');
      }

      $this.messagePatterns[id] = pattern;

      return $this;
    };

    /**
     * Get specific message pattern by id
     *
     * @param {String} id
     * @returns {String|Boolean}
     */
    this.getMessagePattern = function getMessagePattern(id) {

      if ($this.messagePatterns[id] !== undefined) {
        return $this.messagePatterns[id];
      }

      return false;
    };

    this.$get = function $get() {
      return $this;
    }
  }

  angular
    .module(MODULE_NAME)
    .provider(MODULE_NAME + '.$alert', AlertProvider);

}(angular));