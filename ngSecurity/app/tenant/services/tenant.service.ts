module app.tenant {

    export class TenantService extends BaseDataService implements ITenantService {

        constructor(
            public $http: ng.IHttpService,
            public $cacheFactory: ng.ICacheFactoryService,
            public $q: ng.IQService,
            public apiEndpoint: IApiEndpointConfig) {

            super($http, $cacheFactory, $q, apiEndpoint.baseUrl + "tenant/");

        }

    }

    angular.module("app.tenant").service("tenantService", ["$q", "$cacheFactory", "$http", "apiEndpoint", TenantService]);

}




