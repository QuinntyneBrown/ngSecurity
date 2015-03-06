module app.core {

    var app = angular.module("core", ["configuration", "session"])
        .config(config)
        .run(run);

    config.$inject = ["$httpProvider"];

    function config($httpProvider) {

        $httpProvider.interceptors.push("authorizationInterceptor");

        $httpProvider.interceptors.push("requestCounter");
    }

    run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "token"];

    function run($http: ng.IHttpService,
        $location: ng.ILocationService,
        $rootScope: ICoreRootScope,
        $route: any,
        $templateCache: ng.ITemplateCacheService,
        currentUser: any,
        token: any) {

        $rootScope.$on("$routeChangeStart",(event, newUrl) => {

            $rootScope.inViewTransition = true;

            if (newUrl.originalPath == "/signin") {
                token.set({ data: null });
            };

            if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                if (token.get() == null) {
                    $rootScope.$evalAsync(() => {
                        $location.path("/signin");
                    });
                };
            };

        });

        $rootScope.$on("$viewContentLoaded",() => {
            $rootScope.inViewTransition = false;
            if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                $location.path("/signin");
            };
        });

    }
}