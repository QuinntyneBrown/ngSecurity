var ProfileModule;
(function (ProfileModule) {
    angular.module("profile", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/profile/add", {
            templateUrl: ""
        });
        $routeProvider.when("/profile/list", {
            templateUrl: ""
        });
    }
})(ProfileModule || (ProfileModule = {}));
//# sourceMappingURL=module.js.map