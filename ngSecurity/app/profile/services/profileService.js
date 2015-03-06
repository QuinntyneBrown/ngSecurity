var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var profile;
    (function (profile) {
        var ProfileService = (function (_super) {
            __extends(ProfileService, _super);
            function ProfileService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "profile/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return ProfileService;
        })(app.BaseDataService);
        profile.ProfileService = ProfileService;
        angular.module("app.profile").service("profileService", ["$q", "$cacheFactory", "$http", "apiEndpoint", ProfileService]);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profileService.js.map