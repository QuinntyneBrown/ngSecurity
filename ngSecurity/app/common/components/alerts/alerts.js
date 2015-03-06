var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var Alerts = (function () {
            function Alerts(alerting) {
                var _this = this;
                this.alerting = alerting;
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/common/components/alerts/alerts.html";
                this.link = function (scope, element, attributes) {
                    scope.removeAlert = function (alert) {
                        this.alerting.removeAlert(alert);
                    };
                    scope.currentAlerts = _this.alerting.currentAlerts;
                };
            }
            return Alerts;
        })();
        angular.module("app.common").directive("alerts", ["alerting", function (alerting) { return new Alerts(alerting); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alerts.js.map