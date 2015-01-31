var AccountModule;
(function (AccountModule) {
    angular.module("account", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/account/add", {
            templateUrl: ""
        });
        $routeProvider.when("/account/list", {
            templateUrl: ""
        });
    }
})(AccountModule || (AccountModule = {}));
//# sourceMappingURL=module.js.map
var CommonModule;
(function (CommonModule) {
    var app = angular.module("common", ["configuration", "core", "session"]);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=module.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var EntityAdminMenu = (function () {
        function EntityAdminMenu() {
            this.$inject = [];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/common/components/entityAdminMenu/entityAdminMenu.html";
            this.link = function (scope, element, attributes) {
                scope.entityNameLowerCase = attributes.entityName.toLowerCase().replace(" ", "");
                scope.entityName = attributes.entityName;
                scope.entityNamePluralized = attributes.entityNamePluralized;
            };
        }
        EntityAdminMenu.componentId = "entityAdminMenu";
        return EntityAdminMenu;
    })();
    angular.module("common").directive(EntityAdminMenu.componentId, function () { return new EntityAdminMenu(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=entityAdminMenu.js.map
var CommonModule;
(function (CommonModule) {
    var componentId = "identityMenu";
    angular.module("common").directive(componentId, ["session", component]);
    function component(session) {
        return {
            templateUrl: "/app/common/components/identityMenu/identityMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
                scope.session = session;
            }
        };
    }
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=identityMenu.js.map
var CommonModule;
(function (CommonModule) {
    var MultiEntitySelect = (function () {
        function MultiEntitySelect() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/common/components/multiEntitySelect/multiEntitySelect.html";
            this.scope = {
                parentEntities: "=",
                entityService: "="
            };
            this.link = function (scope, element, attributes) {
                scope.parentEntities = scope.parentEntities || [];
                scope.entityNamePlural = attributes.entityNamePlural;
                scope.$watch("selectedId", function () {
                    scope.processSelectedIdChange();
                    scope.selectedId = null;
                });
                scope.processSelectedIdChange = function () {
                    if (scope.selectedId) {
                        for (var i = 0; i < scope.parentEntities.length; i++) {
                            if (scope.parentEntities[i].id == scope.selectedId) {
                                scope.parentEntities.splice(i, 1);
                                return;
                            }
                        }
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == scope.selectedId) {
                                scope.parentEntities.push(scope.vm.entities[i]);
                            }
                        }
                    }
                };
                return scope.entityService.getAll().then(function (results) {
                    scope.vm = {
                        entities: results
                    };
                });
            };
        }
        MultiEntitySelect.componentId = "multiEntitySelect";
        return MultiEntitySelect;
    })();
    angular.module("common").directive(MultiEntitySelect.componentId, function () { return new MultiEntitySelect(); });
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=multiEntitySelect.js.map
var CommonModule;
(function (CommonModule) {
    "use strict";
    var workSpinner = function ($rootScope, requestCounter) {
        return {
            restrict: "E",
            scope: {},
            //template: "<div ng-show='requestCount' class='work-spinner'><img src='images/common/ajax-loader.gif' /></div>",
            template: "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>",
            link: function (scope) {
                scope.$watch(function () {
                    return requestCounter.getRequestCount();
                }, function (requestCount) {
                    scope.requestCount = requestCount;
                });
            }
        };
    };
    var componentId = "workSpinner";
    workSpinner.$inject = ["$rootScope", "requestCounter"];
    angular.module("common").directive(componentId, workSpinner);
})(CommonModule || (CommonModule = {}));
//# sourceMappingURL=workSpinner.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
    var app = angular.module("configuration", []);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=module.js.map
var ConfigurationModule;
(function (ConfigurationModule) {
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
    ConfigurationModule.ConfigurationService = ConfigurationService;
    angular.module("configuration").service(ConfigurationService.serviceId, ["$http", "$q", "$rootScope", function ($http, $q, $rootScope) { return new ConfigurationService($http, $q, $rootScope); }]);
})(ConfigurationModule || (ConfigurationModule = {}));
//# sourceMappingURL=configurationService.js.map
//# sourceMappingURL=IConfigurationService.js.map
var CoreModule;
(function (CoreModule) {
    var app = angular.module("core", ["configuration", "session"]).config(config).run(run);
    config.$inject = ["$httpProvider"];
    function config($httpProvider) {
        $httpProvider.interceptors.push("authorizationInterceptor");
        $httpProvider.interceptors.push("requestCounter");
    }
    run.$inject = ["$http", "$location", "$rootScope", "$route", "$templateCache", "currentUser", "token"];
    function run($http, $location, $rootScope, $route, $templateCache, currentUser, token) {
        $rootScope.$on("$routeChangeStart", function (event, newUrl) {
            $rootScope.inViewTransition = true;
            if (newUrl.originalPath == "/signin") {
                token.set({ data: null });
            }
            ;
            if (newUrl.$$route && newUrl.$$route.authorizationRequired) {
                if (token.get() == null) {
                    $rootScope.$evalAsync(function () {
                        $location.path("/signin");
                    });
                }
                ;
            }
            ;
        });
        $rootScope.$on("$viewContentLoaded", function () {
            $rootScope.inViewTransition = false;
            if ($route.current.$$route.authorizationRequired && (currentUser.get() == null || currentUser.get() == "")) {
                $location.path("/signin");
            }
            ;
        });
    }
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=module.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointConfig.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=IApiEndpointProvider.js.map
//# sourceMappingURL=ICoreRootScope.js.map
//# sourceMappingURL=IDataService.js.map
//# sourceMappingURL=IRouteProvider.js.map
//# sourceMappingURL=IRouteResolver.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function authorizationInterceptor($q, $rootScope, token) {
        var self = this;
        self.request = function (config) {
            if (token.get()) {
                config.headers.Authorization = "Bearer " + token.get();
            }
            return config;
        };
        return self;
    }
    ;
    var interceptorId = "authorizationInterceptor";
    authorizationInterceptor.$inject = ["$q", "$rootScope", "token"];
    angular.module("core").factory(interceptorId, authorizationInterceptor);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=authorizationInterceptor.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function requestCounter($q) {
        var requests = 0;
        var request = function (config) {
            requests += 1;
            return $q.when(config);
        };
        var requestError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var response = function (response) {
            requests -= 1;
            return $q.when(response);
        };
        var responseError = function (error) {
            requests -= 1;
            return $q.reject(error);
        };
        var getRequestCount = function () {
            return requests;
        };
        return {
            request: request,
            response: response,
            requestError: requestError,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    }
    var interceptorId = "requestCounter";
    requestCounter.$inject = ["$q"];
    angular.module("core").factory(interceptorId, requestCounter);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=requestCounter.js.map
var CoreModule;
(function (CoreModule) {
    angular.module("core").value("$", $);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=jQuery.js.map
var CoreModule;
(function (CoreModule) {
    var ApiEndpointProvider = (function () {
        function ApiEndpointProvider() {
        }
        ApiEndpointProvider.prototype.configure = function (baseUrl) {
            this.config = {
                baseUrl: baseUrl
            };
        };
        ApiEndpointProvider.prototype.$get = function () {
            return this.config;
        };
        return ApiEndpointProvider;
    })();
    angular.module("core").provider("apiEndpointProvider", ApiEndpointProvider);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map
(function () {
    "use strict";

    var factoryId = "storage";

    angular.module("core").factory(factoryId, [factory]);

    function factory() {

        var STORAGE_ID = 'ngBlogStorage';

        return {
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            },

            getByName: function (params) {
                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        return items[i];
                    };
                };

                return null;
            },

            put: function (params) {

                var items = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

                for (var i = 0; i < items.length; i++) {
                    if (params.name === items[i].name) {
                        items[i].value = params.value;
                        localStorage.setItem(STORAGE_ID, JSON.stringify(items));
                        return;
                    };
                };

                items.push(params);
                localStorage.setItem(STORAGE_ID, JSON.stringify(items));

            }
        };

    };

})();

(function () {
    "use strict";
    var serviceId = "configuration";
    angular.module("core").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function get() {
            if (data) {
                return data;
            }
            ;
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function set(params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})();
//# sourceMappingURL=configuration.js.map
(function (module) {
    var formEncode = function () {
        return function (data) {
            var pairs = [];
            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        };
    };
    module.factory("formEncode", formEncode);
}(angular.module("core")));
//# sourceMappingURL=formEncode.js.map
var CoreModule;
(function (CoreModule) {
    "use strict";
    function getStringFromUrl(url) {
        var request = new XMLHttpRequest();
        var response = null;
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    response = request.responseText;
                }
            }
        };
        request.open("GET", url, false);
        request.send(null);
        return response;
    }
    angular.module("core").value("getStringFromUrl", getStringFromUrl);
})(CoreModule || (CoreModule = {}));
//# sourceMappingURL=getStringFromUrl.js.map
var GroupModule;
(function (GroupModule) {
    angular.module("group", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/group/add", {
            templateUrl: ""
        });
        $routeProvider.when("/group/list", {
            templateUrl: ""
        });
    }
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=module.js.map
var GroupModule;
(function (GroupModule) {
    var GroupEditor = (function () {
        function GroupEditor($location, groupService) {
            var _this = this;
            this.$location = $location;
            this.groupService = groupService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/group/components/groupEditor/groupEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.groupService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                    else {
                        return _this.groupService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/group/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "groupService"];
        }
        GroupEditor.componentId = "groupEditor";
        return GroupEditor;
    })();
    angular.module("group").directive(GroupEditor.componentId, function ($location, groupService) { return new GroupEditor($location, groupService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupEditor.js.map
var GroupModule;
(function (GroupModule) {
    var GroupList = (function () {
        function GroupList(groupService) {
            var _this = this;
            this.groupService = groupService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/group/components/groupList/groupList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.groupService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.groupService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["groupService"];
        }
        GroupList.componentId = "groupList";
        return GroupList;
    })();
    angular.module("group").directive(GroupList.componentId, function (groupService) { return new GroupList(groupService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupList.js.map
//# sourceMappingURL=IGroupService.js.map
var GroupModule;
(function (GroupModule) {
    "use strict";
    var GroupService = (function () {
        function GroupService($http, $q, $rootScope, configurationService) {
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
                    return "api/" + _this.$rootScope.configuration.apiVersion + "/group/";
                }
                else {
                    return "api/group/";
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
        GroupService.serviceId = "groupService";
        GroupService.$inject = ["$http", "$q", "$rootScope", "configurationService"];
        return GroupService;
    })();
    GroupModule.GroupService = GroupService;
    angular.module("group").service(GroupService.serviceId, function ($http, $q, $rootScope, configurationService) { return new GroupService($http, $q, $rootScope, configurationService); });
})(GroupModule || (GroupModule = {}));
//# sourceMappingURL=groupService.js.map
var ProfileModule;
(function (ProfileModule) {
    angular.module("profile", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/profile/add", {
            templateUrl: ""
        });
        $routeProvider.when("/profile/list", {
            templateUrl: ""
        });
    }
})(ProfileModule || (ProfileModule = {}));
//# sourceMappingURL=module.js.map
var RoleModule;
(function (RoleModule) {
    angular.module("role", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/role/add", {
            templateUrl: ""
        });
        $routeProvider.when("/role/list", {
            templateUrl: ""
        });
    }
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=module.js.map
var RoleModule;
(function (RoleModule) {
    var RoleEditor = (function () {
        function RoleEditor($location, roleService) {
            var _this = this;
            this.$location = $location;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleEditor/roleEditor.html";
            this.scope = {
                entity: "="
            };
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.roleService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                    else {
                        return _this.roleService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/role/list");
                        });
                    }
                };
            };
            this.$inject = ["$location", "roleService"];
        }
        RoleEditor.componentId = "roleEditor";
        return RoleEditor;
    })();
    angular.module("role").directive(RoleEditor.componentId, function ($location, roleService) { return new RoleEditor($location, roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleEditor.js.map
var RoleModule;
(function (RoleModule) {
    var RoleList = (function () {
        function RoleList(roleService) {
            var _this = this;
            this.roleService = roleService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/role/components/roleList/roleList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.roleService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.roleService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["roleService"];
        }
        RoleList.componentId = "roleList";
        return RoleList;
    })();
    angular.module("role").directive(RoleList.componentId, function (roleService) { return new RoleList(roleService); });
})(RoleModule || (RoleModule = {}));
//# sourceMappingURL=roleList.js.map
//# sourceMappingURL=IRoleService.js.map
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
var SecurityModule;
(function (SecurityModule) {
    angular.module("security", [
        "account",
        "configuration",
        "common",
        "core",
        "group",
        "profile",
        "role",
        "session",
        "tenant",
        "user",
        "ngRoute"
    ]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "/app/security/templates/splash.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/signin", {
            templateUrl: "app/security/templates/signin.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/security", {
            templateUrl: "app/security/templates/security.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/add", {
            templateUrl: "/app/security/templates/addrole.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/edit/:roleid", {
            templateUrl: "/app/security/templates/addrole.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/role/list", {
            templateUrl: "/app/security/templates/roles.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/changepassword/:changepasswordid", {
            templateUrl: "/app/security/templates/changepassword.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/add", {
            templateUrl: "/app/security/templates/adduser.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/edit/:userid", {
            templateUrl: "/app/security/templates/adduser.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/user/list", {
            templateUrl: "/app/security/templates/users.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/add", {
            templateUrl: "/app/security/templates/addgroup.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/edit/:groupid", {
            templateUrl: "/app/security/templates/addgroup.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.when("/group/list", {
            templateUrl: "/app/security/templates/groups.html",
            resolve: {
                routeData: [
                    "securityRouteResolver",
                    function (securityRouteResolver) {
                        return securityRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true,
            caseInsensitiveMatch: true
        });
        $routeProvider.otherwise("/");
    }
    function run() {
    }
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=module.js.map
var SecurityModule;
(function (SecurityModule) {
    var DashboardSecurityMenu = (function () {
        function DashboardSecurityMenu() {
            this.restrict = "E";
            this.replace = true;
            this.templateUrl = "/app/security/components/securityMenu/securityMenu.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
            };
        }
        DashboardSecurityMenu.componentId = "securityMenu";
        return DashboardSecurityMenu;
    })();
    angular.module("security").directive(DashboardSecurityMenu.componentId, function () { return new DashboardSecurityMenu(); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityMenu.js.map
var SecurityModule;
(function (SecurityModule) {
    var UserEditor = (function () {
        function UserEditor($location, $routeParams, securityUow) {
            var _this = this;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.securityUow = securityUow;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/security/components/userEditor/userEditor.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.uow = {
                    roles: _this.securityUow.roles,
                    groups: _this.securityUow.groups
                };
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.securityUow.users.update({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                    else {
                        return _this.securityUow.users.add({ model: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/user/list");
                        });
                    }
                };
                if (_this.$routeParams.userid) {
                    return _this.securityUow.users.getById({ id: _this.$routeParams.userid }).then(function (results) {
                        scope.vm.entity = results;
                    }).catch(function (error) {
                    });
                }
            };
            this.$inject = ["$location", "userService"];
        }
        UserEditor.componentId = "userEditor";
        return UserEditor;
    })();
    angular.module("security").directive(UserEditor.componentId, function ($location, $routeParams, securityUow) { return new UserEditor($location, $routeParams, securityUow); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=userEditor.js.map
var SecurityModule;
(function (SecurityModule) {
    var SecurityUow = (function () {
        function SecurityUow(groupService, identityService, roleService, userService) {
            this.groupService = groupService;
            this.identityService = identityService;
            this.roleService = roleService;
            this.userService = userService;
            this.$inject = ["groupService", "identityService", "roleService", "userService"];
            this.identity = this.identityService;
            this.groups = this.groupService;
            this.roles = this.roleService;
            this.users = this.userService;
        }
        SecurityUow.serviceId = "securityUow";
        return SecurityUow;
    })();
    angular.module("security").service(SecurityUow.serviceId, function (groupService, identityService, roleService, userService) { return new SecurityUow(groupService, identityService, roleService, userService); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=uow.js.map
var SecurityModule;
(function (SecurityModule) {
    var SecurityRouteResolver = (function () {
        function SecurityRouteResolver(configurationService, securityUow, $q, $route) {
            var _this = this;
            this.configurationService = configurationService;
            this.securityUow = securityUow;
            this.$q = $q;
            this.$route = $route;
            this.resolveRoute = function () {
                return _this.configurationService.get().then(function () {
                    return _this.securityUow.identity.getCurrentUser().then(function () {
                        if (_this.$route.current.params.userid) {
                            console.log("edit user");
                            return _this.$q.all([
                                _this.securityUow.roles.getAll(),
                                _this.securityUow.groups.getAll(),
                                _this.securityUow.users.getById({ id: _this.$route.current.params.userid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.roleid) {
                            return _this.$q.all([
                                _this.securityUow.roles.getById({ id: _this.$route.current.params.roleid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        if (_this.$route.current.params.groupid) {
                            return _this.$q.all([
                                _this.securityUow.groups.getById({ id: _this.$route.current.params.groupid })
                            ]).then(function (results) {
                                return results;
                            });
                        }
                        return true;
                    });
                });
            };
        }
        SecurityRouteResolver.serviceId = "securityRouteResolver";
        return SecurityRouteResolver;
    })();
    angular.module("security").service(SecurityRouteResolver.serviceId, function (configurationService, securityUow, $q, $route) { return new SecurityRouteResolver(configurationService, securityUow, $q, $route); });
})(SecurityModule || (SecurityModule = {}));
//# sourceMappingURL=securityRouteResolver.js.map
(function () {
    "use strict";
    var app = angular.module("session", ["configuration", "common", "core"]);
})();
//# sourceMappingURL=module.js.map
//# sourceMappingURL=ISession.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "session";
    angular.module("session").service(serviceId, ["$location", "$http", "$q", "configuration", "configurationService", "currentUser", "token", service]);
    function service($location, $http, $q, configuration, configurationService, currentUser, token) {
        var self = this;
        self.isLoggedIn = function () {
            if (self.getCurrentUser() != null && self.getCurrentUser() != "") {
                return (self.getCurrentUser().username);
            }
        };
        self.isUserInRole = function (roleName) {
            if (self.isLoggedIn()) {
                var user = self.getCurrentUser();
                for (var i = 0; i < user.roles.length; i++) {
                    if (roleName == user.roles[i].name) {
                        return true;
                    }
                }
            }
            return false;
        };
        self.getCurrentUser = function () {
            return currentUser.get();
        };
        self.signOut = function () {
            $http({ method: "GET", url: "api/identity/signout" }).then(function () {
            });
            token.set({ data: null });
            currentUser.set({ data: null });
            $location.path("/");
        };
        self.setConfigurationAsync = function () {
            if (configuration.get()) {
                return $q.when(configuration.get());
            }
            return configurationService.get().then(function (results) {
                configuration.set({ data: results });
                return configuration.get();
            });
        };
        self.getConfiguration = function () {
            return configuration.get();
        };
        return self;
    }
    var Session = (function () {
        function Session($location, $http, $q, configuration, configurationService, currentUser, token) {
            this.$location = $location;
            this.$http = $http;
            this.$q = $q;
            this.configuration = configuration;
            this.configurationService = configurationService;
            this.currentUser = currentUser;
            this.token = token;
            this.isLoggedIn = function () {
                return true;
            };
            this.isUserInRole = function (roleName) {
                return true;
            };
            this.getCurrentUser = function () {
                return {};
            };
            this.signOut = function () {
            };
            this.setConfigurationAsync = function () {
            };
            this.getConfiguration = function () {
                return {};
            };
        }
        Session.ServiceId = "session";
        return Session;
    })();
    SessionModule.Session = Session;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=session.js.map
var SessionModule;
(function (SessionModule) {
    "use strict";
    var serviceId = "configuration";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function get() {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function set(params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function routeChange(event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=configuration.js.map
var SessionModule;
(function (SessionModule) {
    angular.module("session").service("currentUser", function ($rootScope, storage) { return new CurrentUser($rootScope, storage); });
    var CurrentUser = (function () {
        function CurrentUser($rootScope, storage) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.storage = storage;
            this.name = "currentUser";
            this.get = function () {
                if (_this.data) {
                    return _this.data;
                }
                try {
                    _this.data = _this.storage.getByName({ name: name }).value;
                }
                catch (error) {
                }
                return _this.data;
            };
            this.set = function (value) {
                _this.data = value.data;
                _this.storage.put({ name: name, value: value.data });
            };
            $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
                if (newUrl.originalPath == "/signin") {
                    _this.data = null;
                    _this.set({ data: null });
                }
            });
        }
        CurrentUser.$inject = ["$rootScope", "storage"];
        return CurrentUser;
    })();
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=currentUser.js.map
var SessionModule;
(function (SessionModule) {
    var serviceId = "token";
    angular.module("session").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "token";
        self.get = function () {
            if (data) {
                return data;
            }
            try {
                data = storage.getByName({ name: name }).value;
            }
            catch (error) {
            }
            return data;
        };
        self.set = function (params) {
            data = params.data;
            storage.put({ name: name, value: params.data });
        };
        $rootScope.$on("$routeChangeStart", function (event, newUrl, oldUrl) {
            if (newUrl.originalPath == "/signin") {
                data = null;
                self.set({ data: null });
            }
        });
        return self;
    }
    ;
})(SessionModule || (SessionModule = {}));
//# sourceMappingURL=token.js.map
var TenantModule;
(function (TenantModule) {
    angular.module("tenant", ["configuration", "common", "core", "session", "ngRoute"]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/tenant/add", {
            templateUrl: ""
        });
        $routeProvider.when("/tenant/list", {
            templateUrl: ""
        });
    }
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=module.js.map
var UserModule;
(function (UserModule) {
    var app = angular.module("user", [
        "configuration",
        "common",
        "core",
        "group",
        "role",
        "session",
        "ngRoute"
    ]).config(config);
    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider.when("/signin", {
            templateUrl: "/app/user/templates/signin.html",
        }).when("/", {
            templateUrl: "/app/user/templates/preferences.html",
            controller: "preferencesController",
            controllerAs: "vm",
            resolve: {
                preferencesData: [
                    "preferencesService",
                    function (preferencesService) {
                        return preferencesService.getClientPreferences();
                    }
                ],
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false
        }).when("/user/add", {
            templateUrl: "/app/user/templates/edit.html",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        }).when("/admin/user/edit/:id", {
            templateUrl: "/app/user/templates/edit.html",
            resolve: [
                "userRouteResolver",
                function (userRouteResolver) {
                    return userRouteResolver.resolveRoute({ route: "/admin/user/edit/:id" });
                }
            ],
            authorizationRequired: true
        }).when("/admin/users", {
            templateUrl: "/app/user/templates/list.html",
            resolve: [
                "userRouteResolver",
                function (userRouteResolver) {
                    return userRouteResolver.resolveRoute({ route: "/admin/users" });
                }
            ],
            authorizationRequired: true
        }).when("/register", {
            templateUrl: "/app/user/templates/register.html",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: false
        }).when("/preferences", {
            templateUrl: "/app/user/templates/preferences.html",
            controller: "preferencesController",
            controllerAs: "vm",
            resolve: {
                routeData: [
                    "userRouteResolver",
                    function (userRouteResolver) {
                        return userRouteResolver.resolveRoute();
                    }
                ]
            },
            authorizationRequired: true
        });
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=module.js.map
var UserModule;
(function (UserModule) {
    "use strict";
    var ChangePasswordForm = (function () {
        function ChangePasswordForm(identityService, userService, $location, $routeParams) {
            var _this = this;
            this.identityService = identityService;
            this.userService = userService;
            this.$location = $location;
            this.$routeParams = $routeParams;
            this.templateUrl = "/app/user/components/changePasswordForm/changePasswordForm.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope) {
                scope.vm = {};
                scope.tryToChangePassword = function (form) {
                    return _this.userService.changePassword({ model: scope.vm }).then(function (results) {
                        _this.$location.path("/user/list");
                    }).catch(function (error) {
                    });
                };
                if (_this.$routeParams.changepasswordid) {
                    return _this.userService.getById({ id: _this.$routeParams.changepasswordid }).then(function (results) {
                        scope.vm = results;
                    });
                }
                else {
                    return _this.identityService.getCurrentUser().then(function (results) {
                        scope.vm = results;
                    });
                }
            };
            this.$inject = ["identityService", "userService", "$location", "$routeParams"];
        }
        ChangePasswordForm.componentId = "changePasswordForm";
        return ChangePasswordForm;
    })();
    angular.module("user").directive(ChangePasswordForm.componentId, function (identityService, userService, $location, $routeParams) { return new ChangePasswordForm(identityService, userService, $location, $routeParams); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=changePasswordForm.js.map
//# sourceMappingURL=preferences.js.map
(function () {
    "use strict";
    var componentId = "registrationForm";
    angular.module("user").directive(componentId, ["$location", "identityService", component]);
    function component($location, identityService) {
        return {
            templateUrl: "/app/user/components/registrationForm/registrationForm.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
                scope.submit = function () {
                    identityService.register({ model: scope.model }).then(function () {
                        $location.path("/signin");
                    });
                };
            }
        };
    }
})();
//# sourceMappingURL=registrationForm.js.map
var UserModule;
(function (UserModule) {
    "use strict";
    var SignInForm = (function () {
        function SignInForm(identityService, token, $location) {
            var _this = this;
            this.identityService = identityService;
            this.token = token;
            this.$location = $location;
            this.templateUrl = "/app/user/components/signInForm/signInForm.html";
            this.restrict = "E";
            this.scope = {};
            this.replace = true;
            this.link = function (scope) {
                scope.vm = {
                    username: "System",
                    password: "password"
                };
                scope.tryToSignIn = function (form) {
                    return _this.identityService.signIn({ model: scope.vm }).then(function (results) {
                        _this.token.set({ data: results });
                        _this.$location.path("/");
                    }).catch(function (error) {
                    });
                };
            };
            this.$inject = ["identityService", "token", "$location"];
        }
        SignInForm.componentId = "signInForm";
        return SignInForm;
    })();
    angular.module("user").directive(SignInForm.componentId, function (identityService, token, $location) { return new SignInForm(identityService, token, $location); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=signinForm.js.map
(function () {
    "use strict";
    var componentId = "userAdminMenu";
    angular.module("user").directive(componentId, ["$location", "$routeParams", "session", component]);
    function component($location, $routeParams, session) {
        return {
            templateUrl: "/app/user/components/userAdminMenu/userAdminMenu.html",
            restrict: "EA",
            replace: true,
            scope: {},
            link: function (scope) {
            }
        };
    }
})();
//# sourceMappingURL=userAdminMenu.js.map
var UserModule;
(function (UserModule) {
    var UserDropDownList = (function () {
        function UserDropDownList() {
            this.templateUrl = "/app/user/components/userDropDownList/userDropDownList.html";
            this.restrict = "E";
            this.scope = {
                currentuser: "="
            };
            this.replace = true;
            this.link = function (scope) {
                scope.users = [
                    { id: 0, name: "John" },
                    { id: 1, name: "Quinn" },
                    { id: 2, name: "Richard" }
                ];
            };
        }
        UserDropDownList.componentId = "userDropDownList";
        return UserDropDownList;
    })();
    UserModule.UserDropDownList = UserDropDownList;
    angular.module("user").directive(UserDropDownList.componentId, [function () { return new UserDropDownList(); }]);
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userDropDownList.js.map
var UserModule;
(function (UserModule) {
    var UserList = (function () {
        function UserList(userService) {
            var _this = this;
            this.userService = userService;
            this.replace = true;
            this.restrict = "E";
            this.templateUrl = "/app/user/components/userList/userList.html";
            this.scope = {};
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.userService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.userService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
            this.$inject = ["userService"];
        }
        UserList.componentId = "userList";
        return UserList;
    })();
    angular.module("user").directive(UserList.componentId, function (userService) { return new UserList(userService); });
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userList.js.map
//# sourceMappingURL=IPreferencesService.js.map
var UserModule;
(function (UserModule) {
    var serviceId = "identityService";
    angular.module("user").service(serviceId, ["$http", "currentUser", "formEncode", service]);
    function service($http, currentUser, formEncode) {
        var self = this;
        self.signIn = function (params) {
            var configuration = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            };
            var data = formEncode({
                username: params.model.username,
                password: params.model.password,
                grant_type: "password"
            });
            return $http.post("/login", data, configuration).then(function (results) {
                return results.data.access_token;
            }).catch(function (error) {
            });
        };
        self.register = function (params) {
            return $http({ method: "POST", url: "api/identity/register", data: JSON.stringify(params.model) }).then(function (results) {
                return results.data.token;
            }).catch(function () {
            });
        };
        self.getCurrentUser = function () {
            return $http({ method: "GET", url: "api/user/getCurrentUser" }).then(function (results) {
                currentUser.set({ data: results.data });
                return currentUser.get();
            }).catch(function () {
            });
        };
        return self;
    }
})(UserModule || (UserModule = {}));
//# sourceMappingURL=identityService.js.map
(function () {
    "use strict";
    function preferencesService($http, $q, configuration) {
        var _this = this;
        var self = this;
        this.$q = $q;
        self.getClientPreferences = function () {
            var deferred = _this.$q.defer();
            deferred.resolve({ "Server": { "RecentPoLimit": 5 }, "Client": { "PlaceCallUse": "Skype", "StartScreen": "Dashboard", "PoDisplayLimit": "15", "PoOrderBy": "Due Date", "PoOrder": "Descending", "RecentPoLimit": "5" } });
            return deferred.promise;
        };
        return self;
    }
    preferencesService.$inject = ["$http", "$q", "configuration"];
    angular.module("user").service("preferencesService", preferencesService);
})();
//# sourceMappingURL=preferencesService.js.map
var UserModule;
(function (UserModule) {
    var serviceId = "userRouteResolver";
    angular.module("user").service(serviceId, ["$q", "$route", "configurationService", "userService", service]);
    function service($q, $route, configurationService, userService) {
        var self = this;
        self.resolveRoute = function (params) {
            return configurationService.get().then(function () {
                if (params) {
                    switch (params.route) {
                        case "/admin/users":
                            return userService.getAll().then(function () {
                            });
                            break;
                        case "/admin/user/edit/:id":
                            return userService.getById({ id: $route.params.id }).then(function () {
                            });
                            break;
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        };
        return self;
    }
    ;
})(UserModule || (UserModule = {}));
//# sourceMappingURL=userRouteResolver.js.map
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
