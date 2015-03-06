module app.role {

    export class RoleService extends BaseDataService implements IRoleService {

        constructor(
            public $http: ng.IHttpService,
            public $cacheFactory: ng.ICacheFactoryService,
            public $q: ng.IQService,
            public apiEndpoint: IApiEndpointConfig) {

            super($http, $cacheFactory, $q, apiEndpoint.baseUrl + "role/");

        }

    }

    angular.module("app.role").service("roleService", ["$q", "$cacheFactory", "$http", "apiEndpoint", RoleService]);

}




