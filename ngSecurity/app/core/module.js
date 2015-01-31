var CoreModule;
(function (CoreModule) {
    var app = angular.module("core", ["configuration", "session"]).config(config).run(run);
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
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=module.js.map