module app.group {

    angular.module("app.group", [
        "app.configuration",
        "app.common",
        "app.core",
        "app.session",
        "ngRoute"])
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