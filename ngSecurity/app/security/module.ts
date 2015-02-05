module SecurityModule {

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

        ])
        .config(config);


    config.$inject = ["$routeProvider"];

    function config($routeProvider) {

        $routeProvider
            .when("/",
            {
                templateUrl: "/app/security/templates/splash.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });
        
        $routeProvider.when("/signin",
            {
                templateUrl: "app/security/templates/signin.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: false,
                caseInsensitiveMatch: true
            });

        $routeProvider.when("/security",
            {
                templateUrl: "app/security/templates/security.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/add",
            {
                templateUrl: "/app/security/templates/addrole.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/edit/:roleid",
            {
                templateUrl: "/app/security/templates/addrole.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/role/list",
            {
                templateUrl: "/app/security/templates/roles.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/account/add",
            {
                templateUrl: "/app/security/templates/addaccount.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/account/edit/:accountid",
            {
                templateUrl: "/app/security/templates/addaccount.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/account/list",
            {
                templateUrl: "/app/security/templates/accounts.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/profile/add",
            {
                templateUrl: "/app/security/templates/addprofile.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/profile/edit/:profileid",
            {
                templateUrl: "/app/security/templates/addprofile.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/profile/list",
            {
                templateUrl: "/app/security/templates/profiles.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });


        $routeProvider
            .when("/tenant/add",
            {
                templateUrl: "/app/security/templates/addtenant.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/tenant/edit/:tenantid",
            {
                templateUrl: "/app/security/templates/addtenant.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/tenant/list",
            {
                templateUrl: "/app/security/templates/tenants.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/changepassword/:changepasswordid",
            {
                templateUrl: "/app/security/templates/changepassword.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/add",
            {
                templateUrl: "/app/security/templates/adduser.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/edit/:userid",
            {
                templateUrl: "/app/security/templates/adduser.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/user/list",
            {
                templateUrl: "/app/security/templates/users.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/add",
            {
                templateUrl: "/app/security/templates/addgroup.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/edit/:groupid",
            {
                templateUrl: "/app/security/templates/addgroup.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
                            return securityRouteResolver.resolveRoute();
                        }
                    ]
                },
                authorizationRequired: true,
                caseInsensitiveMatch: true
            });

        $routeProvider
            .when("/group/list",
            {
                templateUrl: "/app/security/templates/groups.html",
                resolve: {
                    routeData: [
                        "securityRouteResolver", (securityRouteResolver) => {
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
} 