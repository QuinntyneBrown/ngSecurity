var app;
(function (app) {
    var role;
    (function (role) {
        angular.module("app.role", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/role/add", {
                templateUrl: ""
            });
            $routeProvider.when("/role/list", {
                templateUrl: ""
            });
        }
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=role.module.js.map