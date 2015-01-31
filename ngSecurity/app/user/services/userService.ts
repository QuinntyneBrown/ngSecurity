module UserModule {

    var dataServiceId = "userService";

    angular.module("user").service(dataServiceId, ["$http", "$q", "$rootScope", dataService]);

    function dataService($http, $q, $rootScope) {
        var self = this;

        self.getBaseUri = () => {
            if ($rootScope.configuration && $rootScope.configuration.apiVersion) {
                return "api/" + $rootScope.configuration.apiVersion + "/user/";
            } else {
                return "api/user/";
            }
        };

        self.cache = {
            getAll: null,
            getById: null
        };

        $rootScope.$on("$locationChangeStart", () => {
            self.clearCache();
        });

        self.clearCache = () => {
            self.cache = {
                getAll: null,
                getById: null
            };
        };

        self.getAll = (params) => {

            if (self.cache.getAll) {
                var deferred = $q.defer();
                deferred.resolve(self.cache.getAll);
                return deferred.promise;
            };

            return $http({ method: "GET", url: self.getBaseUri() + "getAll", params: params }).then((results) => {
                self.cache.getAll = results.data;
                return results.data;
            }).catch((error: Error) => {

            });
        };

        self.getById = (params) => {

            if (self.cache.getById && self.cache.getById.id == params.id) {
                var deferred = $q.defer();

                deferred.resolve(self.cache.getById);

                return deferred.promise;
            }

            return $http({ method: "GET", url: self.getBaseUri() + "getbyid?id=" + params.id }).then((results) => {


                self.cache.getById = results.data;

                return results.data;

            }).catch((error: Error) => {

            });
        };

        self.remove = (params) => {

            return $http({ method: "DELETE", url: self.getBaseUri() + "remove?id=" + params.id }).then((results) => {

                self.clearCache();

                return results;

            }).catch((error: Error) => {

            });
        };


        self.changePassword = (params) => {

            return $http({ method: "POST", url: self.getBaseUri() + "changePassword", data: JSON.stringify(params.model) }).then((results) => {

                self.clearCache();

                return results;

            }).catch((error: Error) => {

            });
        };
        self.add = (params) => {

            return $http({ method: "POST", url: self.getBaseUri() + "add", data: JSON.stringify(params.model) }).then((results) => {

                self.clearCache();

                return results;

            }).catch((error: Error) => {

            });
        };

        self.update = (params) => {

            return $http({ method: "PUT", url: self.getBaseUri() + "update", data: JSON.stringify(params.model) }).then((results) => {

                self.clearCache();

                return results;

            }).catch((error: Error) => {
                console.log("user service error:" + error);
            });
        };

        return self;
    }

}




