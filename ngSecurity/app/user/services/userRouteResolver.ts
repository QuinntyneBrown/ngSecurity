module UserModule {

    var serviceId = "userRouteResolver";

    angular.module("user").service(serviceId, ["$q", "$route", "configurationService", "userService", service]);

    function service($q, $route, configurationService, userService) {

        var self = this;

        self.resolveRoute = (params) => {

            return configurationService.get().then(() => {
                if (params) {
                    switch (params.route) {

                    case "/admin/users":
                        return userService.getAll().then(() => {

                        });
                        break;

                    case "/admin/user/edit/:id":
                        return userService.getById({ id: $route.params.id }).then(() => {

                        });
                        break;
                    }
                }
            }).catch((error) => {
                console.log(error);
            });

        };

        return self;

    };

}
