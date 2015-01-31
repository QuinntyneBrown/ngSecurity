var TenantModule;
(function (TenantModule) {
    angular.module("tenant", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/tenant/add", {
            templateUrl: ""
        });
        $routeProvider.when("/tenant/list", {
            templateUrl: ""
        });
    }
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=module.js.map