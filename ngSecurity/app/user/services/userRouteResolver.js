var app;
(function (app) {
    var user;
    (function (user) {
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
                });
            };
            return self;
        }
        ;
        angular.module("app.user").service("userRouteResolver", ["$q", "$route", "configurationService", "userService", service]);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
//# sourceMappingURL=userRouteResolver.js.map