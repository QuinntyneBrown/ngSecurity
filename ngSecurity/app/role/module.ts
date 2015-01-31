module RoleModule {

    angular.module("role", ["configuration", "common", "core", "session", "ngRoute"])
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