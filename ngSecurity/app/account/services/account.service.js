var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var account;
    (function (account) {
        "use strict";
        var AccountService = (function (_super) {
            __extends(AccountService, _super);
            function AccountService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "account/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return AccountService;
        })(app.BaseDataService);
        account.AccountService = AccountService;
        angular.module("app.account").service("accountService", ["$q", "$cacheFactory", "$http", "apiEndpoint", AccountService]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=account.service.js.map