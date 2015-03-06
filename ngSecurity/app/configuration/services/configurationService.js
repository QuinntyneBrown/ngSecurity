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
            ConfigurationService.serviceId = "configurationService";
            return ConfigurationService;
        })();
        configuration.ConfigurationService = ConfigurationService;
        angular.module("configuration").service(ConfigurationService.serviceId, ["$http", "$q", "$rootScope", function ($http, $q, $rootScope) { return new ConfigurationService($http, $q, $rootScope); }]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configurationService.js.map