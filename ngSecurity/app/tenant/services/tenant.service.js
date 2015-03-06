var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var tenant;
    (function (tenant) {
        var TenantService = (function (_super) {
            __extends(TenantService, _super);
            function TenantService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "tenant/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return TenantService;
        })(app.BaseDataService);
        tenant.TenantService = TenantService;
        angular.module("app.tenant").service("tenantService", ["$q", "$cacheFactory", "$http", "apiEndpoint", TenantService]);
    })(tenant = app.tenant || (app.tenant = {}));
})(app || (app = {}));
//# sourceMappingURL=tenant.service.js.map