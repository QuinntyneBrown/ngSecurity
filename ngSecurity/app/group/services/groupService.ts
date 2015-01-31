module GroupModule {

    "use strict";

    export class GroupService implements IGroupService {

        public static serviceId: string = "groupService";

        public static $inject = ["$http", "$q", "$rootScope", "configurationService"];

        constructor(private $http, private $q: ng.IQService, private $rootScope: ICoreRootScope, private configurationService: any) {
            this.$rootScope.$on("$locationChangeStart",() => {
                this.clearDataStore();
            });
        }

        private dataStore = {
            getAll: null,
            getById: null,
            pages: []
        };

        private clearDataStore = () => {
            this.dataStore = {
                getAll: null,
                getById: null,
                pages: []
            };
        };

        private getBaseUri = () => {
            if (this.$rootScope.configuration && this.$rootScope.configuration.apiVersion) {
                return "api/" + this.$rootScope.configuration.apiVersion + "/group/";
            } else {
                return "api/group/";
            }
        };

        public add = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "POST", url: this.getBaseUri() + "add", data: options.entity }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }


        public remove = (options) => {

            var deferred = this.$q.defer();

            this.$http({ method: "DELETE", url: this.getBaseUri() + "remove?id=" + options.id }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }


        public getAll = () => {

            var deferred = this.$q.defer();

            if (this.dataStore.getAll) {
                deferred.resolve(this.dataStore.getAll);
                return deferred.promise;
            }

            this.$http({ method: "GET", url: this.getBaseUri() + "getAll" }).then((results) => {
                this.dataStore.getAll = results.data;
                deferred.resolve(results.data);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public getById = (id: string) => {

            var deferred = this.$q.defer();

            if (this.dataStore.getById && this.dataStore.getById.id == id) {
                deferred.resolve(this.dataStore.getById);
                return deferred.promise;
            }

            this.$http({ method: "GET", url: this.getBaseUri() + "getbyid?id=" + id }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public getPage = (offset: number, setSize: number) => {

            var deferred = this.$q.defer();

            if (this.dataStore.getAll) {
                deferred.resolve(this.dataStore.getAll);
                return deferred.promise;
            };

            this.$http({ method: "GET", url: this.getBaseUri() + "getAll" }).then((results) => {
                deferred.resolve(results);
            }).catch((error) => {
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }


    angular.module("group").service(GroupService.serviceId,($http: ng.IHttpService, $q: ng.IQService, $rootScope: ICoreRootScope, configurationService: any) => new GroupService($http, $q, $rootScope, configurationService));


}




