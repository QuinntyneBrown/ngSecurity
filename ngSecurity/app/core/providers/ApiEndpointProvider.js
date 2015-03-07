var app;
(function (app) {
    var core;
    (function (core) {
        var ApiEndpointProvider = (function () {
            function ApiEndpointProvider() {
                this.config = {
                    baseUrl: "/api/"
                };
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
        angular.module("app.core").provider("apiEndpoint", ApiEndpointProvider);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=apiEndpointProvider.js.map