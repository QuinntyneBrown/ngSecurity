module app.core {

    "use strict";

    function authorizationInterceptor($q, $rootScope, token) {

        var self = this;

        self.request = (config) => {

            if (token.get()) {

                config.headers.Authorization = "Bearer " + token.get();

            }

            return config;
        };

        return self;

    };

    var interceptorId = "authorizationInterceptor";

    authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];

    angular.module("app.core").factory(interceptorId, authorizationInterceptor);

}