var app;
(function (app) {
    var common;
    (function (common) {
        var Alerting = (function () {
            function Alerting($timeout) {
                var _this = this;
                this.$timeout = $timeout;
                this.alertTypes = ["warning", "info", "danger", "success"];
                this.currentAlerts = [];
                this.addWarning = function (message) {
                    _this.addAlert("warning", message);
                };
                this.addInfo = function (message) {
                    _this.addAlert("info", message);
                };
                this.addDanger = function (message) {
                    _this.addAlert("danger", message);
                };
                this.addSuccess = function (message) {
                    _this.addAlert("success", message);
                };
                this.errorHandler = function (description) {
                    return function () {
                        _this.addDanger(description);
                    };
                };
                this.removeAlert = function (alert) {
                    for (var i = 0; i < _this.currentAlerts.length; i++) {
                        if (_this.currentAlerts[i] == alert) {
                            _this.currentAlerts.splice(i, 1);
                            break;
                        }
                    }
                };
                this.addAlert = function (type, message) {
                    var alert = { type: type, message: message };
                    _this.currentAlerts.push(alert);
                    _this.$timeout(function () {
                        _this.removeAlert(alert);
                    }, 10000);
                };
            }
            return Alerting;
        })();
        angular.module("app.common").factory("alerting", ["$timeout", function ($timeout) { return new Alerting($timeout); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alerting.js.map