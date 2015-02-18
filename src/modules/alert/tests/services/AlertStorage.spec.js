/* global describe, beforeEach, inject, module, it, expect */
describe('Unit: AlertStorage', function () {

    beforeEach(module('arekjs.alert'));

    var AlertStorage;
    var Alert;

    beforeEach(inject([

        'arekjs.alert.alertStorage',
        'arekjs.alert.alert',

        function (_AlertStorage_, _Alert_) {
            AlertStorage = _AlertStorage_;
            Alert = _Alert_;
        }]));

    it('should be defined', itShouldBeDefined);
    it('should add alert', itShouldAddAlert);
    it('should remove alert', itShouldRemoveAlert);
    it('should return all alerts', itShouldReturnAllAlerts);

    function itShouldBeDefined() {
        expect(AlertStorage).toBeDefined();
    }

    function itShouldAddAlert() {
        var id = AlertStorage.add(Alert.SUCCESS_TYPE, 'hello');

        expect(AlertStorage.getAlert(id)).toBeDefined();
    }

    function itShouldRemoveAlert() {
        var id = AlertStorage.add(Alert.SUCCESS_TYPE, 'hello');

        AlertStorage.remove(id);

        expect(AlertStorage.getAlert(id)).toBeUndefined();
    }

    function itShouldReturnAllAlerts() {
        AlertStorage.add(Alert.SUCCESS_TYPE, 'hello1');
        AlertStorage.add(Alert.ERROR_TYPE, 'hello2');

        expect(AlertStorage.getAlerts()).toBeDefined();
    }
});
