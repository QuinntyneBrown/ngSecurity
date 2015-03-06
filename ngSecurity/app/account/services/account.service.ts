module app.account {

    "use strict";

    export class AccountService extends BaseDataService implements IAccountService  {

        constructor(
            public $http: ng.IHttpService,
            public $cacheFactory: ng.ICacheFactoryService,
            public $q: ng.IQService,
            public apiEndpoint: IApiEndpointConfig) {

            super($http, $cacheFactory, $q, apiEndpoint.baseUrl + "account/");

        }

    }


    angular.module("app.account").service("accountService", ["$q", "$cacheFactory", "$http", "apiEndpoint", AccountService]);


} 