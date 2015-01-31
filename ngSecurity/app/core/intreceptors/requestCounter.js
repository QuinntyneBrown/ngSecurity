var CoreModule;
(function (CoreModule) {
    "use strict";
    function requestCounter($q) {
        var requests = 0;
        var request = function (config) {
            requests += 1;
            return $q.when(config);
        };
        var requestError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var response = function (response) {
            requests -= 1;
            return $q.when(response);
        };
        var responseError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var getRequestCount = function () {
            return requests;
        };
        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    }
    var interceptorId = "requestCounter";
    requestCounter.$inject = ["$q"];
    angular.module("core").factory(interceptorId, requestCounter);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=requestCounter.js.map