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