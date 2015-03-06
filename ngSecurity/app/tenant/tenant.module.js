var app;
(function (app) {
    var tenant;
    (function (tenant) {
        angular.module("app.tenant", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/tenant/add", {
                templateUrl: ""
            });
            $routeProvider.when("/tenant/list", {
                templateUrl: ""
            });
        }
    })(tenant = app.tenant || (app.tenant = {}));
})(app || (app = {}));
//# sourceMappingURL=tenant.module.js.map