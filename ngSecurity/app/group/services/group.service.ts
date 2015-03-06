module app.group {

    export class GroupService extends BaseDataService implements IGroupService {

        constructor(
            public $http: ng.IHttpService,
            public $cacheFactory: ng.ICacheFactoryService,
            public $q: ng.IQService,
            public apiEndpoint: IApiEndpointConfig) {

            super($http, $cacheFactory, $q, apiEndpoint.baseUrl + "group/");

        }

    }

    angular.module("app.group").service("groupService", ["$q", "$cacheFactory", "$http", "apiEndpoint", GroupService]);

}




