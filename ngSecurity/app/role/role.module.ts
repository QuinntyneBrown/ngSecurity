module app.role {

    angular.module("app.role", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"])
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {


        $routeProvider
            .when("/role/add",
            {
                templateUrl: ""

            });

        $routeProvider
            .when("/role/list",
            {
                templateUrl: ""

            });
    }

} 