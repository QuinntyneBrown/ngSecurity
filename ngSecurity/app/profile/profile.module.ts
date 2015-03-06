module app.profile {

    angular.module("app.profile", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"])
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {


        $routeProvider
            .when("/profile/add",
            {
                templateUrl: ""

            });

        $routeProvider
            .when("/profile/list",
            {
                templateUrl: ""

            });
    }

} 