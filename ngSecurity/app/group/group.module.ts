module GroupModule {

    angular.module("group", ["configuration", "common", "core", "session", "ngRoute"])
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {


        $routeProvider
            .when("/group/add",
            {
                templateUrl: ""

            });

        $routeProvider
            .when("/group/list",
            {
                templateUrl: ""

            });
    }

} 