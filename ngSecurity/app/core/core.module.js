var app;
(function (_app) {
    var core;
    (function (core) {
        var app = angular.module("app.core", ["app.configuration", "app.session"]).config(config).run(run);
        config.$inject = ["$httpProvider"];
        function config($httpProvider) {
            $httpProvider.interceptors.push("authorizationInterceptor");
            $httpProvider.interceptors.push("requestCounter");
        }
        run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "token"];
        function run($http, $location, $rootScope, $route, $templateCache, currentUser, token) {
            $rootScope.$on("$routeChangeStart", function (event, newUrl) {
                $rootScope.inViewTransition = true;
                if (newUrl.originalPath == "/signin") {
                    token.set({ data: null });
                }
                ;
                if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                    if (token.get() == null) {
                        $rootScope.$evalAsync(function () {
                            $location.path("/signin");
                        });
                    }
                    ;
                }
                ;
            });
            $rootScope.$on("$viewContentLoaded", function () {
                $rootScope.inViewTransition = false;
                if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                    $location.path("/signin");
                }
                ;
            });
        }
    })(core = _app.core || (_app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.module.js.map