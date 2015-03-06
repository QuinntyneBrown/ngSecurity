var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var group;
    (function (group) {
        var GroupService = (function (_super) {
            __extends(GroupService, _super);
            function GroupService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "group/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return GroupService;
        })(app.BaseDataService);
        group.GroupService = GroupService;
        angular.module("app.group").service("groupService", ["$q", "$cacheFactory", "$http", "apiEndpoint", GroupService]);
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=group.service.js.map