var CommonModule;
(function (CommonModule) {
    "use strict";
    var AlertItem = (function () {
        function AlertItem() {
            this.$inject = [];
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
        AlertItem.componentId = "alertItem";
        return AlertItem;
    })();
    angular.module("common").directive(AlertItem.componentId, function () { return new AlertItem(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=alertItem.js.map