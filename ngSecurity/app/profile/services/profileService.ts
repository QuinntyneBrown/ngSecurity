module app.profile {

    export class ProfileService extends BaseDataService implements IProfileService {

        constructor(
            public $http: ng.IHttpService,
            public $cacheFactory: ng.ICacheFactoryService,
            public $q: ng.IQService,
            public apiEndpoint: IApiEndpointConfig) {

            super($http, $cacheFactory, $q, apiEndpoint.baseUrl + "profile/");

        }

    }

    angular.module("app.profile").service("profileService", ["$q", "$cacheFactory", "$http", "apiEndpoint", ProfileService]);

}




