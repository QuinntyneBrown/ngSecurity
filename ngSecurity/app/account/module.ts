module AccountModule {

    angular.module("account", ["configuration", "common", "core", "session", "ngRoute"])
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {


        $routeProvider
            .when("/account/add",
            {
                templateUrl: ""

            });

        $routeProvider
            .when("/account/list",
            {
                templateUrl: ""

            });
    }

} 