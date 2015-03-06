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