var app;
(function (app) {
    var account;
    (function (account) {
        angular.module("account", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/account/add", {
                templateUrl: ""
            });
            $routeProvider.when("/account/list", {
                templateUrl: ""
            });
        }
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=account.module.js.map