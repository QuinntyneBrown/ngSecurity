var app;
(function (app) {
    var configuration;
    (function (configuration) {
        var ConfigurationService = (function () {
            function ConfigurationService($http, $q, $rootScope) {
                this.$http = $http;
                this.$q = $q;
                this.$rootScope = $rootScope;
                this.baseUri = "api/configuration/";
            }
            ConfigurationService.prototype.get = function () {
                var _this = this;
                var deferred = this.$q.defer();
                this.$http({ method: "GET", url: this.baseUri + "get" }).then(function (results) {
                    deferred.resolve(_this.$rootScope.configuration = results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            return ConfigurationService;
        })();
        configuration.ConfigurationService = ConfigurationService;
        angular.module("app.configuration").service("configurationService", ["$http", "$q", "$rootScope", ConfigurationService]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.provider.js.map