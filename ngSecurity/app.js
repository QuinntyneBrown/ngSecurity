var app;
(function (app) {
    var BaseDataService = (function () {
        function BaseDataService($http, $cacheFactory, $q, baseUri) {
            var _this = this;
            this.$http = $http;
            this.$cacheFactory = $cacheFactory;
            this.$q = $q;
            this.baseUri = baseUri;
            this.add = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.baseUri + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.update = function (options) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "POST", url: _this.baseUri + "add", data: options.entity }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getById = function (id) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "GET", url: _this.baseUri + "getbyid?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.getAll = function () {
                var deferred = _this.$q.defer();
                _this.$http({ method: "GET", url: _this.baseUri + "getAll" }).then(function (results) {
                    deferred.resolve(results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.remove = function (id) {
                var deferred = _this.$q.defer();
                _this.$http({ method: "DELETE", url: _this.baseUri + "remove?id=" + id }).then(function (results) {
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            this.deleteFromCache = function (key) {
            };
        }
        BaseDataService.prototype.fromCacheOrService = function (action, key) {
            var deferred = this.$q.defer();
            var dataCache = this.$cacheFactory.get(key);
            if (!dataCache) {
                this.$http({ method: "GET", url: this.baseUri + "getAll" }).then(function (results) {
                    deferred.resolve(results.data);
                }).catch(function (error) {
                    deferred.reject(error);
                });
            }
            else {
                deferred.resolve(dataCache);
            }
            return deferred.promise;
        };
        return BaseDataService;
    })();
    app.BaseDataService = BaseDataService;
})(app || (app = {}));
//# sourceMappingURL=baseData.service.js.map
var app;
(function (app) {
    var account;
    (function (account) {
        angular.module("app.account", [
            "app.configuration",
            "app.common",
            "app.core",
            "app.session",
            "ngRoute"
        ]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=account.module.js.map
var app;
(function (app) {
    var account;
    (function (account) {
        "use strict";
        var AccountEditor = (function () {
            function AccountEditor($location, accountService) {
                var _this = this;
                this.$location = $location;
                this.accountService = accountService;
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/account/components/accountEditor/accountEditor.html";
                this.link = function (scope, element, attributes) {
                    scope.vm = {};
                    scope.vm.entity = scope.entity;
                    scope.tryToSave = function (form) {
                        if (scope.vm.entity.id) {
                            return _this.accountService.update({ entity: scope.vm.entity }).then(function (results) {
                                _this.$location.path("/account/list");
                            });
                        }
                        else {
                            return _this.accountService.add({ entity: scope.vm.entity }).then(function (results) {
                                _this.$location.path("/account/list");
                            });
                        }
                    };
                };
            }
            return AccountEditor;
        })();
        angular.module("app.account").directive("accountEditor", ["$location", "accountService", function ($location, accountService) { return new AccountEditor($location, accountService); }]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=accountEditor.js.map
var app;
(function (app) {
    var account;
    (function (account) {
        "use strict";
        var AccountList = (function () {
            function AccountList(accountService) {
                var _this = this;
                this.accountService = accountService;
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/account/components/accountList/accountList.html";
                this.link = function (scope, element, attributes) {
                    scope.vm = {};
                    scope.vm.remove = function (entity) {
                        return _this.accountService.remove({ id: entity.id }).then(function () {
                            for (var i = 0; i < scope.vm.entities.length; i++) {
                                if (scope.vm.entities[i].id == entity.id) {
                                    scope.vm.entities.splice(i, 1);
                                }
                            }
                        }).catch(function (error) {
                        });
                    };
                    return _this.accountService.getAll().then(function (results) {
                        return scope.vm.entities = results;
                    });
                };
            }
            return AccountList;
        })();
        angular.module("app.account").directive("accountList", ["accountService", function (accountService) { return new AccountList(accountService); }]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=accountList.js.map
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var account;
    (function (account) {
        "use strict";
        var AccountService = (function (_super) {
            __extends(AccountService, _super);
            function AccountService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "account/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return AccountService;
        })(app.BaseDataService);
        account.AccountService = AccountService;
        angular.module("app.account").service("accountService", ["$q", "$cacheFactory", "$http", "apiEndpoint", AccountService]);
    })(account = app.account || (app.account = {}));
})(app || (app = {}));
//# sourceMappingURL=account.service.js.map
var app;
(function (_app) {
    var common;
    (function (common) {
        var app = angular.module("app.common", ["app.configuration", "app.core", "app.session"]);
    })(common = _app.common || (_app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=common.module.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var AlertItem = (function () {
            function AlertItem() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {
                    alert: "="
                };
                this.templateUrl = "/app/common/components/alertItem/alertItem.html";
                this.link = function (scope, element, attributes) {
                    scope.removeAlert = function (alert) {
                        this.alerting.removeAlert(alert);
                    };
                };
            }
            return AlertItem;
        })();
        angular.module("app.common").directive("alertItem", [function () { return new AlertItem(); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alertItem.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var Alerts = (function () {
            function Alerts(alerting) {
                var _this = this;
                this.alerting = alerting;
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/common/components/alerts/alerts.html";
                this.link = function (scope, element, attributes) {
                    scope.removeAlert = function (alert) {
                        this.alerting.removeAlert(alert);
                    };
                    scope.currentAlerts = _this.alerting.currentAlerts;
                };
            }
            return Alerts;
        })();
        angular.module("app.common").directive("alerts", ["alerting", function (alerting) { return new Alerts(alerting); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alerts.js.map
var app;
(function (app) {
    var common;
    (function (common) {
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
        angular.module("app.common").directive(EntityAdminMenu.componentId, function () { return new EntityAdminMenu(); });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=entityAdminMenu.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        var IdentityMenu = (function () {
            function IdentityMenu(session) {
                var _this = this;
                this.session = session;
                this.templateUrl = "/app/common/components/identityMenu/identityMenu.html";
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.link = function (scope, element, attributes) {
                    scope.session = _this.session;
                };
            }
            return IdentityMenu;
        })();
        angular.module("app.common").directive("identityMenu", ["session", function (session) { return new IdentityMenu(session); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=identityMenu.js.map
var app;
(function (app) {
    var common;
    (function (common) {
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
            return MultiEntitySelect;
        })();
        angular.module("app.common").directive("multiEntitySelect", [function () { return new MultiEntitySelect(); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=multiEntitySelect.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var WorkSpinner = (function () {
            function WorkSpinner(requestCounter) {
                this.requestCounter = requestCounter;
                this.restrict = "E";
                this.scope = {};
                this.template = "<div ng-show='requestCount' class='work-spinner'><i class='fa fa-spinner fa-spin fade'></i></div>";
                this.link = function (scope) {
                    //scope.$watch(() => {
                    //    return this.requestCounter.getRequestCount();
                    //}, (requestCount) => {
                    //    scope.requestCount = requestCount;
                    //});
                };
            }
            return WorkSpinner;
        })();
        angular.module("app.common").directive("workSpinner", ["$rootScope", "requestCounter", function (requestCounter) { return new WorkSpinner(requestCounter); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=workSpinner.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        var Alerting = (function () {
            function Alerting($timeout) {
                var _this = this;
                this.$timeout = $timeout;
                this.alertTypes = ["warning", "info", "danger", "success"];
                this.currentAlerts = [];
                this.addWarning = function (message) {
                    _this.addAlert("warning", message);
                };
                this.addInfo = function (message) {
                    _this.addAlert("info", message);
                };
                this.addDanger = function (message) {
                    _this.addAlert("danger", message);
                };
                this.addSuccess = function (message) {
                    _this.addAlert("success", message);
                };
                this.errorHandler = function (description) {
                    return function () {
                        _this.addDanger(description);
                    };
                };
                this.removeAlert = function (alert) {
                    for (var i = 0; i < _this.currentAlerts.length; i++) {
                        if (_this.currentAlerts[i] == alert) {
                            _this.currentAlerts.splice(i, 1);
                            break;
                        }
                    }
                };
                this.addAlert = function (type, message) {
                    var alert = { type: type, message: message };
                    _this.currentAlerts.push(alert);
                    _this.$timeout(function () {
                        _this.removeAlert(alert);
                    }, 10000);
                };
            }
            return Alerting;
        })();
        angular.module("app.common").factory("alerting", ["$timeout", function ($timeout) { return new Alerting($timeout); }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=alerting.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("app.common").config(function ($provide) {
            $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
                return function (exception, cause) {
                    $delegate(exception, cause);
                    var alerting = $injector.get("alerting");
                    alerting.addDanger(exception.message);
                };
            });
        });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=exceptionHandler.js.map
var app;
(function (_app) {
    var configuration;
    (function (configuration) {
        var app = angular.module("app.configuration", []);
    })(configuration = _app.configuration || (_app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.module.js.map
var app;
(function (app) {
    var configuration;
    (function (configuration) {
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
            return ConfigurationService;
        })();
        configuration.ConfigurationService = ConfigurationService;
        angular.module("app.configuration").service("configurationService", ["$http", "$q", "$rootScope", ConfigurationService]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.provider.js.map
var app;
(function (_app) {
    var core;
    (function (core) {
        var app = angular.module("app.core", ["app.configuration", "app.session"]).config(config).run(run);
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
    })(core = _app.core || (_app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=core.module.js.map
var app;
(function (app) {
    var core;
    (function (core) {
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
        angular.module("app.core").factory(interceptorId, authorizationInterceptor);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=authorizationInterceptor.js.map
var app;
(function (app) {
    var core;
    (function (core) {
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
        angular.module("app.core").factory("requestCounter", ["$q", requestCounter]);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=requestCounter.js.map
var app;
(function (app) {
    var core;
    (function (core) {
        angular.module("app.core").value("$", $);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=jQuery.js.map
var app;
(function (app) {
    var core;
    (function (core) {
        var ApiEndpointProvider = (function () {
            function ApiEndpointProvider() {
                this.config = {
                    baseUrl: "/api/"
                };
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
        angular.module("app.core").provider("apiEndpoint", ApiEndpointProvider);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=ApiEndpointProvider.js.map
(function () {
    "use strict";

    var factoryId = "storage";

    angular.module("app.core").factory(factoryId, [factory]);

    function factory() {

        var STORAGE_ID = 'ngSecurityStorage';

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
    angular.module("app.core").service(serviceId, ["$rootScope", "storage", service]);
    function service($rootScope, storage) {
        var self = this;
        var data = null;
        var name = "configuration";
        self.get = function () {
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
})();
//# sourceMappingURL=configuration.js.map
var app;
(function (app) {
    var common;
    (function (common) {
        var formEncode = function () {
            return function (data) {
                var pairs = [];
                for (var name in data) {
                    pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
                }
                return pairs.join('&').replace(/%20/g, '+');
            };
        };
        angular.module("app.core").factory("formEncode", formEncode);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=formEncode.js.map
var app;
(function (app) {
    var core;
    (function (core) {
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
        angular.module("app.core").value("getStringFromUrl", getStringFromUrl);
    })(core = app.core || (app.core = {}));
})(app || (app = {}));
//# sourceMappingURL=getStringFromUrl.js.map
var app;
(function (app) {
    var group;
    (function (group) {
        angular.module("app.group", [
            "app.configuration",
            "app.common",
            "app.core",
            "app.session",
            "ngRoute"
        ]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/group/add", {
                templateUrl: ""
            });
            $routeProvider.when("/group/list", {
                templateUrl: ""
            });
        }
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=group.module.js.map
var app;
(function (app) {
    var group;
    (function (group) {
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
        angular.module("app.group").directive(GroupEditor.componentId, function ($location, groupService) { return new GroupEditor($location, groupService); });
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=groupEditor.js.map
var app;
(function (app) {
    var group;
    (function (group) {
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
        angular.module("app.group").directive(GroupList.componentId, function (groupService) { return new GroupList(groupService); });
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=groupList.js.map
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var group;
    (function (group) {
        var GroupService = (function (_super) {
            __extends(GroupService, _super);
            function GroupService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "group/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return GroupService;
        })(app.BaseDataService);
        group.GroupService = GroupService;
        angular.module("app.group").service("groupService", ["$q", "$cacheFactory", "$http", "apiEndpoint", GroupService]);
    })(group = app.group || (app.group = {}));
})(app || (app = {}));
//# sourceMappingURL=group.service.js.map
var app;
(function (app) {
    var profile;
    (function (profile) {
        angular.module("app.profile", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/profile/add", {
                templateUrl: ""
            });
            $routeProvider.when("/profile/list", {
                templateUrl: ""
            });
        }
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profile.module.js.map
var app;
(function (app) {
    var profile;
    (function (profile) {
        "use strict";
        var ProfileEditor = (function () {
            function ProfileEditor($location, profileService) {
                var _this = this;
                this.$location = $location;
                this.profileService = profileService;
                this.$inject = ["$location", "profileService"];
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/profile/components/profileEditor/profileEditor.html";
                this.link = function (scope, element, attributes) {
                    scope.vm = {};
                    scope.vm.entity = scope.entity;
                    scope.tryToSave = function (form) {
                        if (scope.vm.entity.id) {
                            return _this.profileService.update({ entity: scope.vm.entity }).then(function (results) {
                                _this.$location.path("/profile/list");
                            });
                        }
                        else {
                            return _this.profileService.add({ entity: scope.vm.entity }).then(function (results) {
                                _this.$location.path("/profile/list");
                            });
                        }
                    };
                };
            }
            ProfileEditor.componentId = "profileEditor";
            return ProfileEditor;
        })();
        angular.module("app.profile").directive(ProfileEditor.componentId, function ($location, profileService) { return new ProfileEditor($location, profileService); });
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profileEditor.js.map
var app;
(function (app) {
    var profile;
    (function (profile) {
        "use strict";
        var ProfileList = (function () {
            function ProfileList(profileService) {
                var _this = this;
                this.profileService = profileService;
                this.$inject = ["profileService"];
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/app/profile/components/profileList/profileList.html";
                this.link = function (scope, element, attributes) {
                    scope.vm = {};
                    scope.vm.remove = function (entity) {
                        return _this.profileService.remove({ id: entity.id }).then(function () {
                            for (var i = 0; i < scope.vm.entities.length; i++) {
                                if (scope.vm.entities[i].id == entity.id) {
                                    scope.vm.entities.splice(i, 1);
                                }
                            }
                        }).catch(function (error) {
                        });
                    };
                    return _this.profileService.getAll().then(function (results) {
                        return scope.vm.entities = results;
                    });
                };
            }
            ProfileList.componentId = "profileList";
            return ProfileList;
        })();
        angular.module("app.profile").directive(ProfileList.componentId, function (profileService) { return new ProfileList(profileService); });
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profileList.js.map
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var profile;
    (function (profile) {
        var ProfileService = (function (_super) {
            __extends(ProfileService, _super);
            function ProfileService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "profile/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return ProfileService;
        })(app.BaseDataService);
        profile.ProfileService = ProfileService;
        angular.module("app.profile").service("profileService", ["$q", "$cacheFactory", "$http", "apiEndpoint", ProfileService]);
    })(profile = app.profile || (app.profile = {}));
})(app || (app = {}));
//# sourceMappingURL=profileService.js.map
var app;
(function (app) {
    var role;
    (function (role) {
        angular.module("app.role", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/role/add", {
                templateUrl: ""
            });
            $routeProvider.when("/role/list", {
                templateUrl: ""
            });
        }
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=role.module.js.map
var app;
(function (app) {
    var role;
    (function (role) {
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
        angular.module("app.role").directive(RoleEditor.componentId, function ($location, roleService) { return new RoleEditor($location, roleService); });
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=roleEditor.js.map
var app;
(function (app) {
    var role;
    (function (role) {
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
        angular.module("app.role").directive(RoleList.componentId, function (roleService) { return new RoleList(roleService); });
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=roleList.js.map
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var role;
    (function (role) {
        var RoleService = (function (_super) {
            __extends(RoleService, _super);
            function RoleService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "role/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return RoleService;
        })(app.BaseDataService);
        role.RoleService = RoleService;
        angular.module("app.role").service("roleService", ["$q", "$cacheFactory", "$http", "apiEndpoint", RoleService]);
    })(role = app.role || (app.role = {}));
})(app || (app = {}));
//# sourceMappingURL=roleService.js.map
var app;
(function (app) {
    var security;
    (function (security) {
        angular.module("app.security", [
            "app.account",
            "app.configuration",
            "app.common",
            "app.core",
            "app.group",
            "app.profile",
            "app.role",
            "app.session",
            "app.tenant",
            "app.user",
            "ngRoute"
        ]).config(["$routeProvider", "apiEndpointProvider", config]);
        function config($routeProvider, apiEndpointProvider) {
            apiEndpointProvider.configure("/api/");
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
            $routeProvider.when("/account/add", {
                templateUrl: "/app/security/templates/addaccount.html",
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
            $routeProvider.when("/account/edit/:accountid", {
                templateUrl: "/app/security/templates/addaccount.html",
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
            $routeProvider.when("/account/list", {
                templateUrl: "/app/security/templates/accounts.html",
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
            $routeProvider.when("/profile/add", {
                templateUrl: "/app/security/templates/addprofile.html",
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
            $routeProvider.when("/profile/edit/:profileid", {
                templateUrl: "/app/security/templates/addprofile.html",
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
            $routeProvider.when("/profile/list", {
                templateUrl: "/app/security/templates/profiles.html",
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
            $routeProvider.when("/tenant/add", {
                templateUrl: "/app/security/templates/addtenant.html",
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
            $routeProvider.when("/tenant/edit/:tenantid", {
                templateUrl: "/app/security/templates/addtenant.html",
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
            $routeProvider.when("/tenant/list", {
                templateUrl: "/app/security/templates/tenants.html",
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
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=security.module.js.map
var app;
(function (app) {
    var security;
    (function (security) {
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
        angular.module("app.security").directive(DashboardSecurityMenu.componentId, function () { return new DashboardSecurityMenu(); });
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityMenu.js.map
var app;
(function (app) {
    var security;
    (function (security) {
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
            }
            return UserEditor;
        })();
        angular.module("app.security").directive("userEditor", ["$location", "$routeParams", "securityUow", function ($location, $routeParams, securityUow) { return new UserEditor($location, $routeParams, securityUow); }]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=userEditor.js.map
var app;
(function (app) {
    var security;
    (function (security) {
        var SecurityUow = (function () {
            function SecurityUow(groupService, identityService, roleService, userService) {
                this.groupService = groupService;
                this.identityService = identityService;
                this.roleService = roleService;
                this.userService = userService;
                this.identity = this.identityService;
                this.groups = this.groupService;
                this.roles = this.roleService;
                this.users = this.userService;
            }
            return SecurityUow;
        })();
        angular.module("app.security").service("securityUow", ["groupService", "identityService", "roleService", "userService", SecurityUow]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=security.uow.js.map
var app;
(function (app) {
    var security;
    (function (security) {
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
        angular.module("app.security").service(SecurityRouteResolver.serviceId, function (configurationService, securityUow, $q, $route) { return new SecurityRouteResolver(configurationService, securityUow, $q, $route); });
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityRouteResolver.js.map
var app;
(function (app) {
    var session;
    (function (session) {
        angular.module("app.session", [
            "app.configuration",
            "app.common",
            "app.core"
        ]);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=session.module.js.map
var app;
(function (app) {
    var session;
    (function (session) {
        var serviceId = "session";
        angular.module("app.session").service(serviceId, ["$location", "$http", "$q", "configuration", "configurationService", "currentUser", "token", service]);
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
        session.Session = Session;
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=session.js.map
var app;
(function (app) {
    var session;
    (function (session) {
        "use strict";
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
        angular.module("app.session").service("configuration", ["$rootScope", "storage", service]);
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.js.map
var app;
(function (app) {
    var session;
    (function (session) {
        angular.module("app.session").service("currentUser", function ($rootScope, storage) { return new CurrentUser($rootScope, storage); });
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
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=currentUser.js.map
var app;
(function (app) {
    var session;
    (function (session) {
        var serviceId = "token";
        angular.module("app.session").service(serviceId, ["$rootScope", "storage", service]);
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
    })(session = app.session || (app.session = {}));
})(app || (app = {}));
//# sourceMappingURL=token.js.map
var app;
(function (app) {
    var tenant;
    (function (tenant) {
        angular.module("app.tenant", ["app.configuration", "app.common", "app.core", "app.session", "ngRoute"]).config(config);
        config.$inject = ["$routeProvider"];
        function config($routeProvider) {
            $routeProvider.when("/tenant/add", {
                templateUrl: ""
            });
            $routeProvider.when("/tenant/list", {
                templateUrl: ""
            });
        }
    })(tenant = app.tenant || (app.tenant = {}));
})(app || (app = {}));
//# sourceMappingURL=tenant.module.js.map
var TenantModule;
(function (TenantModule) {
    "use strict";
    var TenantEditor = (function () {
        function TenantEditor($location, tenantService) {
            var _this = this;
            this.$location = $location;
            this.tenantService = tenantService;
            this.$inject = ["$location", "tenantService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/tenant/components/tenantEditor/tenantEditor.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.entity = scope.entity;
                scope.tryToSave = function (form) {
                    if (scope.vm.entity.id) {
                        return _this.tenantService.update({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/tenant/list");
                        });
                    }
                    else {
                        return _this.tenantService.add({ entity: scope.vm.entity }).then(function (results) {
                            _this.$location.path("/tenant/list");
                        });
                    }
                };
            };
        }
        TenantEditor.componentId = "tenantEditor";
        return TenantEditor;
    })();
    angular.module("app.tenant").directive(TenantEditor.componentId, function ($location, tenantService) { return new TenantEditor($location, tenantService); });
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=tenantEditor.js.map
var TenantModule;
(function (TenantModule) {
    "use strict";
    var TenantList = (function () {
        function TenantList(tenantService) {
            var _this = this;
            this.tenantService = tenantService;
            this.$inject = ["tenantService"];
            this.restrict = "E";
            this.replace = true;
            this.scope = {};
            this.templateUrl = "/app/tenant/components/tenantList/tenantList.html";
            this.link = function (scope, element, attributes) {
                scope.vm = {};
                scope.vm.remove = function (entity) {
                    return _this.tenantService.remove({ id: entity.id }).then(function () {
                        for (var i = 0; i < scope.vm.entities.length; i++) {
                            if (scope.vm.entities[i].id == entity.id) {
                                scope.vm.entities.splice(i, 1);
                            }
                        }
                    }).catch(function (error) {
                    });
                };
                return _this.tenantService.getAll().then(function (results) {
                    return scope.vm.entities = results;
                });
            };
        }
        TenantList.componentId = "tenantList";
        return TenantList;
    })();
    angular.module("app.tenant").directive(TenantList.componentId, function (tenantService) { return new TenantList(tenantService); });
})(TenantModule || (TenantModule = {}));
//# sourceMappingURL=tenantList.js.map
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var tenant;
    (function (tenant) {
        var TenantService = (function (_super) {
            __extends(TenantService, _super);
            function TenantService($http, $cacheFactory, $q, apiEndpoint) {
                _super.call(this, $http, $cacheFactory, $q, apiEndpoint.baseUrl + "tenant/");
                this.$http = $http;
                this.$cacheFactory = $cacheFactory;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
            }
            return TenantService;
        })(app.BaseDataService);
        tenant.TenantService = TenantService;
        angular.module("app.tenant").service("tenantService", ["$q", "$cacheFactory", "$http", "apiEndpoint", TenantService]);
    })(tenant = app.tenant || (app.tenant = {}));
})(app || (app = {}));
//# sourceMappingURL=tenant.service.js.map
var app;
(function (_app) {
    var user;
    (function (user) {
        var app = angular.module("app.user", [
            "app.configuration",
            "app.common",
            "app.core",
            "app.group",
            "app.role",
            "app.session",
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
    })(user = _app.user || (_app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=user.module.js.map
var app;
(function (app) {
    var user;
    (function (user) {
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
        angular.module("app.user").directive(ChangePasswordForm.componentId, function (identityService, userService, $location, $routeParams) { return new ChangePasswordForm(identityService, userService, $location, $routeParams); });
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=changePasswordForm.js.map
//# sourceMappingURL=preferences.js.map
(function () {
    "use strict";
    var componentId = "registrationForm";
    angular.module("app.user").directive(componentId, ["$location", "identityService", component]);
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
var app;
(function (app) {
    var user;
    (function (user) {
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
                            console.log("what what?");
                        });
                    };
                };
                this.$inject = ["identityService", "token", "$location"];
            }
            SignInForm.componentId = "signInForm";
            return SignInForm;
        })();
        angular.module("app.user").directive(SignInForm.componentId, function (identityService, token, $location) { return new SignInForm(identityService, token, $location); });
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=signinForm.js.map
(function () {
    "use strict";
    var componentId = "userAdminMenu";
    angular.module("app.user").directive(componentId, ["$location", "$routeParams", "app.session", component]);
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
var app;
(function (app) {
    var user;
    (function (user) {
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
        user.UserDropDownList = UserDropDownList;
        angular.module("app.user").directive(UserDropDownList.componentId, [function () { return new UserDropDownList(); }]);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userDropDownList.js.map
var app;
(function (app) {
    var user;
    (function (user) {
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
        angular.module("app.user").directive(UserList.componentId, function (userService) { return new UserList(userService); });
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userList.js.map
var app;
(function (app) {
    var user;
    (function (user) {
        var serviceId = "identityService";
        angular.module("app.user").service(serviceId, ["$http", "alerting", "currentUser", "formEncode", service]);
        function service($http, alerting, currentUser, formEncode) {
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
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
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
    angular.module("app.user").service("preferencesService", preferencesService);
})();
//# sourceMappingURL=preferencesService.js.map
var app;
(function (app) {
    var user;
    (function (user) {
        var serviceId = "userRouteResolver";
        angular.module("app.user").service(serviceId, ["$q", "$route", "configurationService", "userService", service]);
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
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userRouteResolver.js.map
var app;
(function (app) {
    var user;
    (function (user) {
        var dataServiceId = "userService";
        angular.module("app.user").service(dataServiceId, ["$http", "$q", "$rootScope", dataService]);
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
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userService.js.map
