var app;
(function (app) {
    var core;
    (function (core) {
        var ApiEndpointProvider = (function () {
            function ApiEndpointProvider() {
            }
            ApiEndpointProvider.prototype.configure = function (baseUrl) {
                this.config = {
                    baseUrl: baseUrl
                };
            };
            ApiEndpointProvider.prototype.$get = function () {
                return this.config;
            };
            return ApiEndpointProvider;
        })();
        angular.module("core").provider("apiEndpointProvider", ApiEndpointProvider);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map