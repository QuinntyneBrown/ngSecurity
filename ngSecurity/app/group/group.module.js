var app;
(function (app) {
    var group;
    (function (group) {
        angular.module("app.group", [
            "app.configuration",
            "app.common",
            "app.core",
            "app.session",
            "ngRoute"
        ]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/group/add", {
                templateUrl: ""
            });
            $routeProvider.when("/group/list", {
                templateUrl: ""
            });
        }
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=group.module.js.map