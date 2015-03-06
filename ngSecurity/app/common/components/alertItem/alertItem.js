var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var AlertItem = (function () {
            function AlertItem() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {
                    alert: "="
                };
                this.templateUrl = "/app/common/components/alertItem/alertItem.html";
                this.link = function (scope, element, attributes) {
                    scope.removeAlert = function (alert) {
                        this.alerting.removeAlert(alert);
                    };
                };
            }
            return AlertItem;
        })();
        angular.module("app.common").directive("alertItem", [function () { return new AlertItem(); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alertItem.js.map