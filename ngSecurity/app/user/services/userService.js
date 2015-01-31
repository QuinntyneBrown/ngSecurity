var UserModule;
(function (UserModule) {
    var dataServiceId = "userService";
    angular.module("user").service(dataServiceId, ["$http", "$q", "$rootScope", dataService]);
    function dataService($http, $q, $rootScope) {
        var self = this;
        self.getBaseUri = function () {
            if ($rootScope.configuration && $rootScope.configuration.apiVersion) {
                return "api/" + $rootScope.configuration.apiVersion + "/user/";
            }
            else {
                return "api/user/";
            }
        };
        self.cache = {
            getAll: null,
            getById: null
        };
        $rootScope.$on("$locationChangeStart", function () {
            self.clearCache();
        });
        self.clearCache = function () {
            self.cache = {
                getAll: null,
                getById: null
            };
        };
        self.getAll = function (params) {
            if (self.cache.getAll) {
                var deferred = $q.defer();
                deferred.resolve(self.cache.getAll);
                return deferred.promise;
            }
            ;
            return $http({ method: "GET", url: self.getBaseUri() + "getAll", params: params }).then(function (results) {
                self.cache.getAll = results.data;
                return results.data;
            }).catch(function (error) {
            });
        };
        self.getById = function (params) {
            if (self.cache.getById && self.cache.getById.id == params.id) {
                var deferred = $q.defer();
                deferred.resolve(self.cache.getById);
                return deferred.promise;
            }
            return $http({ method: "GET", url: self.getBaseUri() + "getbyid?id=" + params.id }).then(function (results) {
                self.cache.getById = results.data;
                return results.data;
            }).catch(function (error) {
            });
        };
        self.remove = function (params) {
            return $http({ method: "DELETE", url: self.getBaseUri() + "remove?id=" + params.id }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.changePassword = function (params) {
            return $http({ method: "POST", url: self.getBaseUri() + "changePassword", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.add = function (params) {
            return $http({ method: "POST", url: self.getBaseUri() + "add", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
            });
        };
        self.update = function (params) {
            return $http({ method: "PUT", url: self.getBaseUri() + "update", data: JSON.stringify(params.model) }).then(function (results) {
                self.clearCache();
                return results;
            }).catch(function (error) {
                console.log("user service error:" + error);
            });
        };
        return self;
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userService.js.map