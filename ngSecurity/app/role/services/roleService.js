var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var role;
    (function (role) {
        var RoleService = (function (_super) {
            __extends(RoleService, _super);
            function RoleService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "role/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return RoleService;
        })(app.BaseDataService);
        role.RoleService = RoleService;
        angular.module("app.role").service("roleService", ["$q", "$cacheFactory", "$http", "apiEndpoint", RoleService]);
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=roleService.js.map