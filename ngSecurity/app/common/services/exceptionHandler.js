var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("app.common").config(function ($provide) {
            $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                return function (exception, cause) {
                    $delegate(exception, cause);
                    var alerting = $injector.get("alerting");
                    alerting.addDanger(exception.message);
                };
            });
        });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=exceptionHandler.js.map