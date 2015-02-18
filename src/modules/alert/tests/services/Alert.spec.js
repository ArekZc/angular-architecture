/* global describe, beforeEach, inject, module, it, expect */
describe('Unit: Alert', function () {

    beforeEach(module('arekjs.alert'));

    var Alert;

    beforeEach(inject(['arekjs.alert.alert', function (_Alert_) {
        Alert = _Alert_;
    }]));

    it('should be defined', itShouldBeDefined);
    it('should create success alert', itShouldCreateSuccessAlert);
    it('should create error alert', itShouldCreateErrorAlert);
    it('should create info alert', itShouldCreateInfoAlert);

    function itShouldBeDefined() {
        expect(Alert).toBeDefined();
    }

    function itShouldCreateSuccessAlert() {
        Alert.success('hello', []);

        expect(Alert.getStorage().getAlert(0)).toBeDefined();
    }

    function itShouldCreateErrorAlert() {
        Alert.error('hello', []);

        expect(Alert.getStorage().getAlert(0)).toBeDefined();
    }

    function itShouldCreateInfoAlert() {
        Alert.info('hello', []);

        expect(Alert.getStorage().getAlert(0)).toBeDefined();
    }
});
