var app;
(function (app) {
    var profile;
    (function (profile) {
        angular.module("app.profile", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/profile/add", {
                templateUrl: ""
            });
            $routeProvider.when("/profile/list", {
                templateUrl: ""
            });
        }
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profile.module.js.map