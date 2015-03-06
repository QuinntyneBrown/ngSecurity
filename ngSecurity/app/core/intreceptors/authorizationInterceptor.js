var app;
(function (app) {
    var core;
    (function (core) {
        "use strict";
        function authorizationInterceptor($q, $rootScope, token) {
            var self = this;
            self.request = function (config) {
                if (token.get()) {
                    config.headers.Authorization = "Bearer " + token.get();
                }
                return config;
            };
            return self;
        }
        ;
        var interceptorId = "authorizationInterceptor";
        authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];
        angular.module("core").factory(interceptorId, authorizationInterceptor);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=authorizationInterceptor.js.map