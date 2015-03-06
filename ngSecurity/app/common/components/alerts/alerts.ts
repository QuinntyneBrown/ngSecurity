module app.common {

    "use strict";

    class Alerts {

        constructor(private alerting) {

        }

        public restrict: string = "E";

        public replace: boolean = true;

		public scope = {};

        public templateUrl: string = "/app/common/components/alerts/alerts.html";

        public link = (scope, element, attributes) => {

            scope.removeAlert = function (alert) {
                this.alerting.removeAlert(alert);
            };

            scope.currentAlerts = this.alerting.currentAlerts;
        }

    }

    angular.module("app.common").directive("alerts", ["alerting",(alerting) => new Alerts(alerting)]);

}
