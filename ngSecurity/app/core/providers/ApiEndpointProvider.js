var CoreModule;
(function (CoreModule) {
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
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map