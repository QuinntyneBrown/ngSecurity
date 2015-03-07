module app.common {

    "use strict";

    class WorkSpinner {

        constructor(private requestCounter) {
            
        }

        restrict = "E";

        scope = {};

        template = "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>";

        link = (scope, element, attributes) => {
            scope.$watch(() => {
                return this.requestCounter.getRequestCount();
            },  (requestCount) => {
                scope.requestCount = requestCount;
            });
        };
    }
    

    angular.module("app.common").directive("workSpinner", ["requestCounter", (requestCounter) => new WorkSpinner(requestCounter)]);

}