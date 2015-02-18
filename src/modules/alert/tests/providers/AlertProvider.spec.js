/* global describe, beforeEach, inject, module, it, expect */
describe('Unit: AlertProvider', function () {

  beforeEach(module('arekjs.alert'));

  /**
   * @type {AlertProvider}
   */
  var alertProvider;

  beforeEach(inject([
      'arekjs.alert.$alert',

      function (_AlertProvider_) {
          alertProvider = _AlertProvider_;
      }]
  ));

  it('should be defined', itShouldBeDefined);
  it('should add message pattern', itShouldAddMessagePattern);

  function itShouldBeDefined() {
    expect(alertProvider).toBeDefined();
  }

  function itShouldAddMessagePattern() {
    var messageId = 'SOME_ID';

    alertProvider.addMessagePattern(messageId, 'some message');

    expect(alertProvider.getMessagePattern(messageId)).toBeDefined();
  }

});
