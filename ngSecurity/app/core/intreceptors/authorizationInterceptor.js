var CoreModule;
(function (CoreModule) {
    "use strict";
    function authorizationInterceptor($q, $rootScope, token) {
        var self = this;
        self.request = function (config) {
            if (token.get()) {
                config.headers["Authorization"] = "basic " + token.get();
            }
            return config;
        };
        return self;
    }
    ;
    var interceptorId = "authorizationInterceptor";
    authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];
    angular.module("core").factory(interceptorId, authorizationInterceptor);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=authorizationInterceptor.js.map