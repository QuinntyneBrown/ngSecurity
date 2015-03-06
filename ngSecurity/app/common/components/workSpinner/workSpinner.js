var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var workSpinner = function ($rootScope, requestCounter) {
            return {
                restrict: "E",
                scope: {},
                //template: "<div ng-show='requestCount' class='work-spinner'><img src='images/common/ajax-loader.gif' /></div>",
                template: "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>",
                link: function (scope) {
                    scope.$watch(function () {
                        return requestCounter.getRequestCount();
                    }, function (requestCount) {
                        scope.requestCount = requestCount;
                    });
                }
            };
        };
        var componentId = "workSpinner";
        workSpinner.$inject = ["$rootScope", "requestCounter"];
        angular.module("common").directive(componentId, workSpinner);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=workSpinner.js.map