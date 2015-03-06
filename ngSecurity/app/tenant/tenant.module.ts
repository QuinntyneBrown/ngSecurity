module app.tenant {

    angular.module("app.tenant", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"])
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {


        $routeProvider
            .when("/tenant/add",
            {
                templateUrl: ""

            });

        $routeProvider
            .when("/tenant/list",
            {
                templateUrl: ""

            });
    }

} 