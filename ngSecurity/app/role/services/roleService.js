var RoleModule;
(function (RoleModule) {
    "use strict";
    var RoleService = (function () {
        function RoleService($http, $q, $rootScope, configurationService) {
            var _this = this;
            this.$http = $http;
            this.$q = $q;
            this.$rootScope = $rootScope;
            this.configurationService = configurationService;
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
            this.clearDataStore = function () {
                _this.dataStore = {
                    getAll: null,
                    getById: null,
                    pages: []
                };
            };
            this.getBaseUri = function () {
                if (_this.$rootScope.configuration && _this.$rootScope.configuration.apiVersion) {
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/role/";
                }
                else {
                    return "api/role/";
                }
            };
            this.add = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.getBaseUri() + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.remove = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "DELETE", url: _this.getBaseUri() + "remove?id=" + options.id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    _this.dataStore.getAll = results.data;
                    deferred.resolve(results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getById && _this.dataStore.getById.id == id) {
                    deferred.resolve(_this.dataStore.getById);
                    return deferred.promise;
                }
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getPage = function (offset, setSize) {
                var deferred = _this.$q.defer();
                if (_this.dataStore.getAll) {
                    deferred.resolve(_this.dataStore.getAll);
                    return deferred.promise;
                }
                ;
                _this.$http({ method: "GET", url: _this.getBaseUri() + "getAll" }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.$rootScope.$on("$locationChangeStart", function () {
                _this.clearDataStore();
            });
        }
        RoleService.serviceId = "roleService";
        RoleService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return RoleService;
    })();
    RoleModule.RoleService = RoleService;
    angular.module("role").service(RoleService.serviceId, function ($http, $q, $rootScope, configurationService) { return new RoleService($http, $q, $rootScope, configurationService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleService.js.map