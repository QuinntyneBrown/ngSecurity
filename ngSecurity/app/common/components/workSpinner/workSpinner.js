var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var WorkSpinner = (function () {
            function WorkSpinner(requestCounter) {
                var _this = this;
                this.requestCounter = requestCounter;
                this.restrict = "E";
                this.scope = {};
                this.template = "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>";
                this.link = function (scope, element, attributes) {
                    scope.$watch(function () {
                        return _this.requestCounter.getRequestCount();
                    }, function (requestCount) {
                        scope.requestCount = requestCount;
                    });
                };
            }
            return WorkSpinner;
        })();
        angular.module("app.common").directive("workSpinner", ["requestCounter", function (requestCounter) { return new WorkSpinner(requestCounter); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=workSpinner.js.map